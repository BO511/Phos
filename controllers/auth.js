import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

/* REGISTER USER */

export const register = async (req, res) => {
  try {
    const {
      rutCliente,
      nombreCliente,
      apellidoCliente,
      contraseñaCliente,
      direccionCliente,
      correoCliente,
      telefonoCliente,
    } = req.body;

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(contraseñaCliente, salt);

    const newUser = new User({
      rutCliente,
      nombreCliente,
      apellidoCliente,
      contraseñaCliente: passwordHash,
      direccionCliente,
      correoCliente,
      telefonoCliente,
    });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* LOGGING IN */
export const login = async (req, res) => {
  try {
    const { correoCliente, contraseñaCliente } = req.body;

    const user = await User.findOne({ correoCliente: correoCliente });
    if (!user) return res.status(400).json({ msg: "El usuario no existe." });

    const isMatch = await bcrypt.compare(
      contraseñaCliente,
      user.contraseñaCliente
    );
    if (!isMatch)
      return res.status(400).json({ msg: "La contraseña no coincide." });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    delete user.contraseñaCliente;
    res.status(200).json({ token, user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
