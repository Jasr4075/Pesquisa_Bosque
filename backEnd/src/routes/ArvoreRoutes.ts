import express from 'express';
import ArvoreController from '../controllers/ArvoreController';

const router = express.Router();

router.get('/arvores', ArvoreController.read);
router.get('/arvores/:id', ArvoreController.readById);
router.post('/arvores', ArvoreController.create);
router.patch('/arvores/:id', ArvoreController.update);
router.delete('/arvores/:id', ArvoreController.delete);

export default router;