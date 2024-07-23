import { Request, Response } from "express";
import Reino from "../models/Reino";

const ReinoController = {
    create: async (req: Request, res: Response) => {
        try {
            const { nome, descricao } = req.body;
            const reino = await Reino.create({
                nome,
                descricao
            });
            res.status(201).json(reino);
        } catch (error) {
            res.status(500).json({ error: (error as any).message });
        }
    },
    read: async (req: Request, res: Response) => {
        try {
            const reinos = await Reino.findAll();
            res.status(200).json(reinos);
        } catch (error) {
            res.status(500).json({ error: (error as any).message });
        }
    },
    readById: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const reino = await Reino.findByPk(id);
            res.status(200).json(reino);
        } catch (error) {
            res.status(500).json({ error: (error as any).message });
        }
    },
    update: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const { nome, descricao } = req.body;
            await Reino.update({
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
            await Reino.destroy({ where: { id } });
            res.sendStatus(204);
        } catch (error) {
            res.status(500).json({ error: (error as any).message });
        }
    }
};