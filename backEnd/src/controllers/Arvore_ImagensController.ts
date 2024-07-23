import { Request, Response } from "express";
import Arvore_Imagens from "../models/Arvore_Imagens";

const Arvore_ImagensController = {
    create: async (req: Request, res: Response) => {
        try {
            const { descricao, imagem, qrcode, arvore_id } = req.body;
            const arvore_imagem = await Arvore_Imagens.create({
                descricao,
                imagem,
                qrcode,
                arvore_id
            });
            res.status(201).json(arvore_imagem);
        } catch (error) {
            res.status(500).json({ error: (error as any).message });
        }
    },
    read: async (req: Request, res: Response) => {
        try {
            const arvore_imagens = await Arvore_Imagens.findAll();
            res.status(200).json(arvore_imagens);
        } catch (error) {
            res.status(500).json({ error: (error as any).message });
        }
    },
    readById: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const arvore_imagem = await Arvore_Imagens.findByPk(id);
            res.status(200).json(arvore_imagem);
        } catch (error) {
            res.status(500).json({ error: (error as any).message });
        }
    },
    update: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const { descricao, imagem, qrcode, arvore_id } = req.body;
            await Arvore_Imagens.update({
                descricao,
                imagem,
                qrcode,
                arvore_id
            }, { where: { id } });
            res.sendStatus(204);
        } catch (error) {
            res.status(500).json({ error: (error as any).message });
        }
    },
    delete: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            await Arvore_Imagens.destroy({ where: { id } });
            res.sendStatus(204);
        } catch (error) {
            res.status(500).json({ error: (error as any).message });
        }
    }
};

export default Arvore_ImagensController;
