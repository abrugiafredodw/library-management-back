
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("🛑 La variable de entorno MONGODB_URI no está definida");
}

const connect = async (): Promise<void> => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("✅ Conexión a MongoDB exitosa");
  } catch (err) {
    console.error("🛑 Error al conectar a MongoDB:", err);
    throw err;
  }
};

export { connect };