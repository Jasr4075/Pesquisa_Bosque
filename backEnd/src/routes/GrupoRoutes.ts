import express from 'express';
import GrupoController from '../controllers/GrupoController';

const router = express.Router();

router.get('/grupos', GrupoController.read);
router.get('/grupos/:id', GrupoController.readById);
router.post('/grupos', GrupoController.create);
router.patch('/grupos/:id', GrupoController.update);
router.delete('/grupos/:id', GrupoController.delete);

export default router;