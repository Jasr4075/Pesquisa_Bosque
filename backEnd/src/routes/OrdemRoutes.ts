import express from 'express';
import OrdemController from '../controllers/OrdemController';
import exp from 'constants';

const router = express.Router();

router.get('/ordens', OrdemController.read);
router.get('/ordens/:id', OrdemController.readById);
router.post('/ordens', OrdemController.create);
router.patch('/ordens/:id', OrdemController.update);
router.delete('/ordens/:id', OrdemController.delete);

export default router;