import { Request, Response } from "express";
import Genero from "../models/Genero";

const GeneroController = {
    create: async (req: Request, res: Response) => {
        try {
            const { nome, descricao, familia_id } = req.body;
            const genero = await Genero.create({
                nome,
                descricao,
                familia_id
            });
            res.status(201).json(genero);
        } catch (error) {
            res.status(500).json({ error: (error as any).message });
        }
    },
    read: async (req: Request, res: Response) => {
        try {
            const generos = await Genero.findAll();
            res.status(200).json(generos);
        } catch (error) {
            res.status(500).json({ error: (error as any).message });
        }
    },
    readById: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const genero = await Genero.findByPk(id);
            res.status(200).json(genero);
        } catch (error) {
            res.status(500).json({ error: (error as any).message });
        }
    },
    update: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const { nome, descricao, familia_id } = req.body;
            await Genero.update({
                nome,
                descricao,
                familia_id
            }, { where: { id } });
            res.sendStatus(204);
        } catch (error) {
            res.status(500).json({ error: (error as any).message });
        }
    },
    delete: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            await Genero.destroy({ where: { id } });
            res.sendStatus(204);
        } catch (error) {
            res.status(500).json({ error: (error as any).message });
        }
    }
};

export default GeneroController;