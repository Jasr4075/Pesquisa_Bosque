import express from 'express';
import UsuarioController from '../controllers/UsuarioController';

const router = express.Router();

router.get('/usuarios', UsuarioController.read);
router.get('/usuarios/:id', UsuarioController.readById);
router.post('/usuarios', UsuarioController.create);
router.patch('/usuarios/:id', UsuarioController.update);
router.delete('/usuarios/:id', UsuarioController.delete);

export default router;