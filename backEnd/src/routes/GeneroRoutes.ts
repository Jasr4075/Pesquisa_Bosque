import express from 'express';
import GeneroController from '../controllers/GeneroController';

const router = express.Router();

router.get('/generos', GeneroController.read);
router.get('/generos/:id', GeneroController.readById);
router.post('/generos', GeneroController.create);
router.patch('/generos/:id', GeneroController.update);
router.delete('/generos/:id', GeneroController.delete);

export default router;