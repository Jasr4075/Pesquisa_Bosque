import { Request, Response } from "express";
import Tipo from "../models/Tipo";

const TipoController = {
    create: async (req: Request, res: Response) => {
        try {
            const { nome, descricao } = req.body;
            const tipo = await Tipo.create({
                nome,
                descricao
            });
            res.status(201).json(tipo);
        } catch (error) {
            res.status(500).json({ error: (error as any).message });
        }
    },
    read: async (req: Request, res: Response) => {
        try {
            const tipos = await Tipo.findAll();
            res.status(200).json(tipos);
        } catch (error) {
            res.status(500).json({ error: (error as any).message });
        }
    },
    readById: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const tipo = await Tipo.findByPk(id);
            res.status(200).json(tipo);
        } catch (error) {
            res.status(500).json({ error: (error as any).message });
        }
    },
    update: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const { nome, descricao } = req.body;
            await Tipo.update({
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
            await Tipo.destroy({ where: { id } });
            res.sendStatus(204);
        } catch (error) {
            res.status(500).json({ error: (error as any).message });
        }
    }
};

export default TipoController;