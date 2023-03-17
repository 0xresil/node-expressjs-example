import express from 'express';
import { WeaponController } from '../controllers';

const router = express.Router();

router.get('/', WeaponController.getList);
router.get('/summary', WeaponController.getSummaryList);
router.get('/:id', WeaponController.getDetails);

export default router