
import { Request, Response } from "express";
import User from "../models/user-model";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const JWT_SECRET: string = process.env.JWT_SECRET ?? "secret";

/**
 * Registro de usuario
 */
export const register = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { nombre, apellido, email, password } = req.body;
    if (!nombre || !apellido || !email || !password) {
      return res.status(400).json({ ok: false, mensaje: "Todos los campos son obligatorios" });
    }
    const existeUsuario = await User.findOne({ email });
    if (existeUsuario) {
      return res.status(409).json({ ok: false, mensaje: "El email ya está registrado" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const nuevoUsuario = new User({ nombre, apellido, email, password: hashedPassword });
    await nuevoUsuario.save();
    return res.status(201).json({ ok: true, mensaje: "Usuario registrado exitosamente" });
  } catch (error) {
    console.error("Error en registro de usuario:", error);
    return res.status(500).json({ ok: false, mensaje: "Error interno al registrar usuario" });
  }
};

/**
 * Autenticación de usuario
 */
export const login = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ ok: false, mensaje: "Email y contraseña son obligatorios" });
    }
    const usuario = await User.findOne({ email });
    if (!usuario) {
      return res.status(401).json({ ok: false, mensaje: "Credenciales inválidas" });
    }
    const passwordValido = await bcrypt.compare(password, usuario.password);
    if (!passwordValido) {
      return res.status(401).json({ ok: false, mensaje: "Credenciales inválidas" });
    }
    const token = jwt.sign(
      { id: usuario._id, email: usuario.email, nombre:usuario.nombre, apellido:usuario.apellido },
      JWT_SECRET,
      { expiresIn: "1h" }
    );
    return res.status(200).json({ ok: true, token });
  } catch (error) {
    console.error("Error en autenticación de usuario:", error);
    return res.status(500).json({ ok: false, mensaje: "Error interno al autenticar usuario" });
  }
};
