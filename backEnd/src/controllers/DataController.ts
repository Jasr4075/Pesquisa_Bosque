import {Request, Response} from 'express';
import Data from '../models/Data';

const DataController = {
    create: async (req: Request, res: Response) => {
        try {
            const {data: requestData, hora, arvore_id} = req.body;
            const data = await Data.create({
                data: requestData,
                hora,
                arvore_id
            });
            res.status(201).json(data);
        } catch (error) {
            res.status(500).json({error: (error as any).message});
        }
    },
    read: async (req: Request, res: Response) => {
        try {
            const datas = await Data.findAll();
            res.status(200).json(datas);
        } catch (error) {
            res.status(500).json({error: (error as any).message});
        }
    },
    readById: async (req: Request, res: Response) => {
        try {
            const {id} = req.params;
            const data = await Data.findByPk(id);
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({error: (error as any).message});
        }
    },
    update: async (req: Request, res: Response) => {
        try {
            const {id} = req.params;
            const {data, hora, arvore_id} = req.body;
            await Data.update({
                data,
                hora,
                arvore_id
            }, {where: {id}});
            res.sendStatus(204);
        } catch (error) {
            res.status(500).json({error: (error as any).message});
        }
    },
    delete: async (req: Request, res: Response) => {
        try {
            const {id} = req.params;
            await Data.destroy({where: {id}});
            res.sendStatus(204);
        } catch (error) {
            res.status(500).json({error: (error as any).message});
        }
    }
};

export default DataController;