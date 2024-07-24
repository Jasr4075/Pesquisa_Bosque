import { Request, Response } from "express";
import  Sistema from "../models/Sistema";

const SistemaController = {
    create: async (req: Request, res: Response) => {
        try {
            const { nome, descricao } = req.body;
            const sistema = await Sistema.create({
                nome,
                descricao
            });
            res.status(201).json(sistema);
        } catch (error) {
            res.status(500).json({ error: (error as any).message });
        }
    },
    read: async (req: Request, res: Response) => {
        try {
            const sistemas = await Sistema.findAll();
            res.status(200).json(sistemas);
        } catch (error) {
            res.status(500).json({ error: (error as any).message });
        }
    },
    readById: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const sistema = await Sistema.findByPk(id);
            res.status(200).json(sistema);
        } catch (error) {
            res.status(500).json({ error: (error as any).message });
        }
    },
    update: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const { nome, descricao } = req.body;
            await Sistema.update({
                nome,
                descricao
            }, { where: { id } });
            res.sendStatus(204);
        } catch (error) {
            res.status(500).json({ error: (error as any).message });
        }
    },
    delete: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            await Sistema.destroy({ where: { id } });
            res.sendStatus(204);
        } catch (error) {
            res.status(500).json({ error: (error as any).message });
        }
    }
};

export default SistemaController;