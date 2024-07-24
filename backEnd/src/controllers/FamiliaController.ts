import {Request, Response} from 'express';
import Familia from '../models/Familia';

const FamiliaController = {
    create: async (req: Request, res: Response) => {
        try {
            const {nome, descricao} = req.body;
            const familia = await Familia.create({
                nome,
                descricao
            });
            res.status(201).json(familia);
        } catch (error) {
            res.status(500).json({error: (error as any).message});
        }
    },
    read: async (req: Request, res: Response) => {
        try {
            const familias = await Familia.findAll();
            res.status(200).json(familias);
        } catch (error) {
            res.status(500).json({error: (error as any).message});
        }
    },
    readById: async (req: Request, res: Response) => {
        try {
            const {id} = req.params;
            const familia = await Familia.findByPk(id);
            res.status(200).json(familia);
        } catch (error) {
            res.status(500).json({error: (error as any).message});
        }
    },
    update: async (req: Request, res: Response) => {
        try {
            const {id} = req.params;
            const {nome, descricao} = req.body;
            await Familia.update({
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
            await Familia.destroy({where: {id}});
            res.sendStatus(204);
        } catch (error) {
            res.status(500).json({error: (error as any).message});
        }
    }
};

export default FamiliaController;