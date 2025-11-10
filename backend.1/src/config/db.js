import mongoose from "mongoose";

export const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, { dbName: "Desafio1" });
    console.log("Conexion exitosa, bienvenido a MongoDB");
  } catch (error) {
    console.error("Error de conexion:", error);
    throw error;
  }
};