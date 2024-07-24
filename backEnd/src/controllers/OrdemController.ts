import { Request, Response } from "express";
import Ordem from "../models/Ordem";

const OrdemController = {
    create: async (req: Request, res: Response) => {
        try {
            const { nome, descricao } = req.body;
            const ordem = await Ordem.create({
                nome,
                descricao
            });
            res.status(201).json(ordem);
        } catch (error) {
            res.status(500).json({ error: (error as any).message });
        }
    },
    read: async (req: Request, res: Response) => {
        try {
            const ordens = await Ordem.findAll();
            res.status(200).json(ordens);
        } catch (error) {
            res.status(500).json({ error: (error as any).message });
        }
    },
    readById: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const ordem = await Ordem.findByPk(id);
            res.status(200).json(ordem);
        } catch (error) {
            res.status(500).json({ error: (error as any).message });
        }
    },
    update: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const { nome, descricao } = req.body;
            await Ordem.update({
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
            await Ordem.destroy({ where: { id } });
            res.sendStatus(204);
        } catch (error) {
            res.status(500).json({ error: (error as any).message });
        }
    }
};

export default OrdemController;