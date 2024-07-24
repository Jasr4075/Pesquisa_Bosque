import { Request, Response } from "express";
import Localizacao from "../models/Localizacao";

const LocalizacaoController = {
    create: async (req: Request, res: Response) => {
        try {
            const { nome, descricao } = req.body;
            const localizacao = await Localizacao.create({
                nome,
                descricao
            });
            res.status(201).json(localizacao);
        } catch (error) {
            res.status(500).json({ error: (error as any).message });
        }
    },
    read: async (req: Request, res: Response) => {
        try {
            const localizacoes = await Localizacao.findAll();
            res.status(200).json(localizacoes);
        } catch (error) {
            res.status(500).json({ error: (error as any).message });
        }
    },
    readById: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const localizacao = await Localizacao.findByPk(id);
            res.status(200).json(localizacao);
        } catch (error) {
            res.status(500).json({ error: (error as any).message });
        }
    },
    update: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const { nome, descricao } = req.body;
            await Localizacao.update({
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
            await Localizacao.destroy({ where: { id } });
            res.sendStatus(204);
        } catch (error) {
            res.status(500).json({ error: (error as any).message });
        }
    }
};

export default LocalizacaoController;