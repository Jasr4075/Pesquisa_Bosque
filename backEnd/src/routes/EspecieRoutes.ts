import express from 'express';
import EspecieController from '../controllers/EspecieController';

const router = express.Router();

router.get('/especies', EspecieController.read);
router.get('/especies/:id', EspecieController.readById);
router.post('/especies', EspecieController.create);
router.patch('/especies/:id', EspecieController.update);
router.delete('/especies/:id', EspecieController.delete);

export default router;