import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { dbConnect } from "./src/config/db.js";
import departamentosRouter from "./src/routes/departamentos.routes.js";
import empleadosRouter from "./src/routes/empleados.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Bienvenido a la API de Prueba-1");
});

app.use("/departamentos", departamentosRouter);
app.use("/empleados", empleadosRouter);

const startServer = async () => {
  try {
    await dbConnect();
    app.listen(PORT, () => {
      console.log(`Servidor escuchando en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("No se pudo conectar a la base de datos", error);
    process.exit(1);
  }
};

startServer();

export default app;