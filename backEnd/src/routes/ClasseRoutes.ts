import express from 'express';
import ClasseController from '../controllers/ClasseController';

const router = express.Router();

router.get('/classes', ClasseController.read);
router.get('/classes/:id', ClasseController.readById);
router.post('/classes', ClasseController.create);
router.patch('/classes/:id', ClasseController.update);
router.delete('/classes/:id', ClasseController.delete);

export default router;