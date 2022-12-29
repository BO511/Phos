import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    rutUser: {
      type: String,
      required: true,
      max: 13,
      min: 8,
      unique: true,
    },
    nombreUser: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    apellidoUser: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    contraseñaUser: {
      type: String,
      required: true,
      min: 5,
      max: 50,
    },
    direccionUser: {
      type: String,
      default: "",
    },
    correoUser: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    telefonoUser: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model.User || mongoose.model("User", UserSchema);
export default User;
