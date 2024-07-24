import express from 'express';
import FamiliaController from '../controllers/FamiliaController';

const router = express.Router();

router.get('/familias', FamiliaController.read);
router.get('/familias/:id', FamiliaController.readById);
router.post('/familias', FamiliaController.create);
router.patch('/familias/:id', FamiliaController.update);
router.delete('/familias/:id', FamiliaController.delete);

export default router;