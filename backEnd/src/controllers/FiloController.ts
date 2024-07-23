import { Request, Response } from "express";
import Filo from "../models/Filo";

const FiloController = {
    create: async (req: Request, res: Response) => {
        try {
            const { nome, descricao } = req.body;
            const filo = await Filo.create({
                nome,
                descricao
            });
            res.status(201).json(filo);
        } catch (error) {
            res.status(500).json({ error: (error as any).message });
        }
    },
    read: async (req: Request, res: Response) => {
        try {
            const filos = await Filo.findAll();
            res.status(200).json(filos);
        } catch (error) {
            res.status(500).json({ error: (error as any).message });
        }
    },
    readById: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const filo = await Filo.findByPk(id);
            res.status(200).json(filo);
        } catch (error) {
            res.status(500).json({ error: (error as any).message });
        }
    },
    update: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const { nome, descricao } = req.body;
            await Filo.update({
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
            await Filo.destroy({ where: { id } });
            res.sendStatus(204);
        } catch (error) {
            res.status(500).json({ error: (error as any).message });
        }
    }
};