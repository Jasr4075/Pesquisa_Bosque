import { Request, Response } from "express";
import Usuario from "../models/Usuario";

const UsuarioController = {
    create: async (req: Request, res: Response) => {
        try {
            const { nome, email, senha } = req.body;
            const usuario = await Usuario.create({
                nome,
                email,
                senha
            });
            res.status(201).json(usuario);
        } catch (error) {
            res.status(500).json({ error: (error as any).message });
        }
    },
    read: async (req: Request, res: Response) => {
        try {
            const usuarios = await Usuario.findAll();
            res.status(200).json(usuarios);
        } catch (error) {
            res.status(500).json({ error: (error as any).message });
        }
    },
    readById: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const usuario = await Usuario.findByPk(id);
            res.status(200).json(usuario);
        } catch (error) {
            res.status(500).json({ error: (error as any).message });
        }
    },
    update: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const { nome, email, senha } = req.body;
            await Usuario.update({
                nome,
                email,
                senha
            }, { where: { id } });
            res.sendStatus(204);
        } catch (error) {
            res.status(500).json({ error: (error as any).message });
        }
    },
    delete: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            await Usuario.destroy({ where: { id } });
            res.sendStatus(204);
        } catch (error) {
            res.status(500).json({ error: (error as any).message });
        }
    }
};

export default UsuarioController;