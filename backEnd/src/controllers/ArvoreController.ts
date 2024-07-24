import { Request, Response } from "express";
import Arvore from "../models/Arvore";

const ArvoreController = {
    create: async (req: Request, res: Response) => {
        try {
            const { nome, descricao, especie, idade, altura, latitude, longitude } = req.body;
            
            // Validar campos requeridos
            if (!nome || !especie) {
                return res.status(400).json({ error: "Nome y especie son requeridos" });
            }

            const arvore = await Arvore.create({
                nome,
                descricao,
                especie,
                idade,
                altura,
                latitude,
                longitude
            });
            res.status(201).json(arvore);
        } catch (error) {
            res.status(500).json({ error: (error as any).message });
        }
    },
    read: async (req: Request, res: Response) => {
        try {
            const arvores = await Arvore.findAll();
            res.status(200).json(arvores);
        } catch (error) {
            res.status(500).json({ error: (error as any).message });
        }
    },
    readById: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const arvore = await Arvore.findByPk(id);

            if (!arvore) {
                return res.status(404).json({ error: "Árvore não encontrada" });
            }

            res.status(200).json(arvore);
        } catch (error) {
            res.status(500).json({ error: (error as any).message });
        }
    },
    update: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const { nome, descricao, especie, idade, altura, latitude, longitude } = req.body;

            const arvore = await Arvore.findByPk(id);

            if (!arvore) {
                return res.status(404).json({ error: "Árvore não encontrada" });
            }

            await Arvore.update({
                nome,
                descricao,
                especie,
                idade,
                altura,
                latitude,
                longitude
            }, { where: { id } });

            res.sendStatus(204);
        } catch (error) {
            res.status(500).json({ error: (error as any).message });
        }
    },
    delete: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;

            const arvore = await Arvore.findByPk(id);

            if (!arvore) {
                return res.status(404).json({ error: "Árvore não encontrada" });
            }

            await Arvore.destroy({ where: { id } });
            res.sendStatus(204);
        } catch (error) {
            res.status(500).json({ error: (error as any).message });
        }
    }
};

export default ArvoreController;
