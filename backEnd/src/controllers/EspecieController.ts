import {Request, Response} from 'express';
import Especie from '../models/Especie';

const EspecieController = {
    create: async (req: Request, res: Response) => {
        try {
            const {nome, descricao} = req.body;
            const especie = await Especie.create({
                nome,
                descricao
            });
            res.status(201).json(especie);
        } catch (error) {
            res.status(500).json({error: (error as any).message});
        }
    },
    read: async (req: Request, res: Response) => {
        try {
            const especies = await Especie.findAll();
            res.status(200).json(especies);
        } catch (error) {
            res.status(500).json({error: (error as any).message});
        }
    },
    readById: async (req: Request, res: Response) => {
        try {
            const {id} = req.params;
            const especie = await Especie.findByPk(id);
            res.status(200).json(especie);
        } catch (error) {
            res.status(500).json({error: (error as any).message});
        }
    },
    update: async (req: Request, res: Response) => {
        try {
            const {id} = req.params;
            const {nome, descricao} = req.body;
            await Especie.update({
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
            await Especie.destroy({where: {id}});
            res.sendStatus(204);
        } catch (error) {
            res.status(500).json({error: (error as any).message});
        }
    }
};

export default EspecieController;