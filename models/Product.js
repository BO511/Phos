import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    nombreProduct: {
      type: String,
      max: 50,
      required: true,
    },
    descripcionProduct: {
      type: String,
      max: 99,
      required: true,
    },
    imagenProduct:{
      type: String,
      default: "",
    },
    stockMinimo: {
      type: Number,
      required: true,
    },
    stockActual: {
      type: Number,
      required: true,
    },
    precioVenta: {
      type: Number,
      required: true,
    },
    precioCompra: {
      type: Number,
      required: true,
    },
    idCategoria: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);
export default Product;