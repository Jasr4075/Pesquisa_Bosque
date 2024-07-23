import {Request, Response} from 'express';
import Classe from '../models/Classe';

const ClasseController = {
    create: async (req: Request, res: Response) => {
        try {
            const {nome, descricao} = req.body;
            const classe = await Classe.create({
                nome,
                descricao
            });
            res.status(201).json(classe);
        } catch (error) {
            res.status(500).json({error: (error as any).message});
        }
    },
    read: async (req: Request, res: Response) => {
        try {
            const classes = await Classe.findAll();
            res.status(200).json(classes);
        } catch (error) {
            res.status(500).json({error: (error as any).message});
        }
    },
    readById: async (req: Request, res: Response) => {
        try {
            const {id} = req.params;
            const classe = await Classe.findByPk(id);
            res.status(200).json(classe);
        } catch (error) {
            res.status(500).json({error: (error as any).message});
        }
    },
    update: async (req: Request, res: Response) => {
        try {
            const {id} = req.params;
            const {nome, descricao} = req.body;
            await Classe.update({
                nome,
                descricao
            }, {where: {id}});
            res.sendStatus(204);
        } catch (error) {
            res.status(500).json({error: (error as any).message});
        }
    },
    delete: async (req: Request, res: Response) => {
        try {
            const {id} = req.params;
            await Classe.destroy({where: {id}});
            res.sendStatus(204);
        } catch (error) {
            res.status(500).json({error: (error as any).message});
        }
    }
};