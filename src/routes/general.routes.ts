import express from 'express';
import { GeneralController } from '../controllers';

const router = express.Router();

router.get('/', GeneralController.getList);
router.get('/summary', GeneralController.getSummaryList);
router.get('/:id', GeneralController.getDetails);

export default router