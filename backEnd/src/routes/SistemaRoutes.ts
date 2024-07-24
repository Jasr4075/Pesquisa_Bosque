import express from 'express';
import SistemaController from '../controllers/SistemaController';

const router = express.Router();

router.get('/sistemas', SistemaController.read);
router.get('/sistemas/:id', SistemaController.readById);
router.post('/sistemas', SistemaController.create);
router.patch('/sistemas/:id', SistemaController.update);
router.delete('/sistemas/:id', SistemaController.delete);

export default router;