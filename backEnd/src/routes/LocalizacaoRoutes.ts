import express from 'express';
import LocalizacaoController from '../controllers/LocalizacaoController';

const router = express.Router();

router.get('/localizacoes', LocalizacaoController.read);
router.get('/localizacoes/:id', LocalizacaoController.readById);
router.post('/localizacoes', LocalizacaoController.create);
router.patch('/localizacoes/:id', LocalizacaoController.update);
router.delete('/localizacoes/:id', LocalizacaoController.delete);

export default router;