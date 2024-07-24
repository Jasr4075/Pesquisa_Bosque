import express from 'express';
import Arvore_ImagensController from '../controllers/Arvore_ImagensController';

const router = express.Router();

router.get('/arvores_imagens', Arvore_ImagensController.read);
router.get('/arvores_imagens/:id', Arvore_ImagensController.readById);
router.post('/arvores_imagens', Arvore_ImagensController.create);
router.patch('/arvores_imagens/:id', Arvore_ImagensController.update);
router.delete('/arvores_imagens/:id', Arvore_ImagensController.delete);

export default router;