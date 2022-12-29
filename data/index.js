import mongoose from "mongoose";

export const users = [
  {
    _id: new mongoose.Types.ObjectId(),
    rutUser: "18.056.934-0",
    nombreUser: "test",
    apellidoUser: "me",
    contraseñaUser: "asd123",
    direccionUser: "San Fran, CA",
    correoUser: "aaaaaaa@gmail.com",
    telefonoUser: 18888822,
    createdAt: 1115211422,
    updatedAt: 1115211422,
    __v: 0,
  },
];

export const products = [
  {
    _id: new mongoose.Types.ObjectId(),
    nombreProduct: "frasco",
    descripcionProduct: "diseñado para ketshup",
    imagenProduct: "p3.jpeg",
    stockMinimo: 5,
    stockActual: 10,
    precioVenta: 20000,
    precioCompra: 15000,
    idCategoria: 0,
    createdAt: 1115211422,
    updatedAt: 1115211422,
  },
];
