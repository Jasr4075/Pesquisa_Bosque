import { Request, Response } from "express";
import Grupo from "../models/Grupo";

const GrupoController = {
    create: async (req: Request, res: Response) => {
        try {
            const { nome, descricao, familia_id } = req.body;
            const grupo = await Grupo.create({
                nome,
                descricao,
                familia_id
            });
            res.status(201).json(grupo);
        } catch (error) {
            res.status(500).json({ error: (error as any).message });
        }
    },
    read: async (req: Request, res: Response) => {
        try {
            const grupos = await Grupo.findAll();
            res.status(200).json(grupos);
        } catch (error) {
            res.status(500).json({ error: (error as any).message });
        }
    },
    readById: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const grupo = await Grupo.findByPk(id);
            res.status(200).json(grupo);
        } catch (error) {
            res.status(500).json({ error: (error as any).message });
        }
    },
    update: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const { nome, descricao, familia_id } = req.body;
            await Grupo.update({
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
            await Grupo.destroy({ where: { id } });
            res.sendStatus(204);
        } catch (error) {
            res.status(500).json({ error: (error as any).message });
        }
    }
};