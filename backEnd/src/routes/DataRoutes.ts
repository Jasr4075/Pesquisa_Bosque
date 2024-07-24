import express from 'express';
import FiloController from '../controllers/FiloController';
import e from 'express';

const router = express.Router();

router.get('/filos', FiloController.read);
router.get('/filos/:id', FiloController.readById);
router.post('/filos', FiloController.create);
router.patch('/filos/:id', FiloController.update);
router.delete('/filos/:id', FiloController.delete);

export default router;