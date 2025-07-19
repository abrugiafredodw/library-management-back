import { Response, NextFunction } from "express";
import { AuthenticatedRequest } from "../middleware/auth";
import Library from "../models/library-model";

/**
 * Crear un libro
 */
export const createLibrary = async (req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<Response | void> => {
  try {
    const { nombre, genero, descripcion, leido } = req.body;
    const usuario = req.user?.id;
    if (!nombre || !genero || !descripcion || !usuario) {
      return res.status(400).json({ ok: false, mensaje: "Todos los campos son obligatorios" });
    }
    const libro = new Library({ nombre, genero, descripcion, usuario, leido });
    await libro.save();
    return res.status(201).json({ ok: true, libro });
  } catch (error) {
    next(error);
  }
};

/**
 * Obtener todos los libros del usuario autenticado
 */
export const getLibraries = async (req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<Response | void> => {
  try {
    const usuario = req.user?.id;
    const libros = await Library.find({ usuario });
    return res.status(200).json({ ok: true, libros });
  } catch (error) {
    next(error);
  }
};

/**
 * Actualizar un libro
 */
export const updateLibrary = async (req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<Response | void> => {
  try {
    const { id } = req.params;
    const usuario = req.user?.id;
    const libro = await Library.findOneAndUpdate({ _id: id, usuario }, req.body, { new: true });
    if (!libro) {
      return res.status(404).json({ ok: false, mensaje: "Libro no encontrado" });
    }
    return res.status(200).json({ ok: true, libro });
  } catch (error) {
    next(error);
  }
};

/**
 * Eliminar un libro
 */
export const deleteLibrary = async (req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<Response | void> => {
  try {
    const { id } = req.params;
    const usuario = req.user?.id;
    const libro = await Library.findOneAndDelete({ _id: id, usuario });
    if (!libro) {
      return res.status(404).json({ ok: false, mensaje: "Libro no encontrado" });
    }
    return res.status(204).json({ ok: true, mensaje: "Libro eliminado" });
  } catch (error) {
    next(error);
  }
};
