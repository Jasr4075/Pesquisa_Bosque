import express from 'express';
import TipoController from '../controllers/TipoController';

const router = express.Router();

router.get('/tipos', TipoController.read);
router.get('/tipos/:id', TipoController.readById);
router.post('/tipos', TipoController.create);
router.patch('/tipos/:id', TipoController.update);
router.delete('/tipos/:id', TipoController.delete);

export default router;