import express from 'express';
import ReinoController from '../controllers/ReinoController';

const router = express.Router();

router.get('/reinos', ReinoController.read);
router.get('/reinos/:id', ReinoController.readById);
router.post('/reinos', ReinoController.create);
router.patch('/reinos/:id', ReinoController.update);
router.delete('/reinos/:id', ReinoController.delete);

export default router;