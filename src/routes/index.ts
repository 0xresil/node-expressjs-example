import { Router } from 'express';
import GeneralRoute from './general.routes';
import WeaponRoute from './weapon.routes';

const router = Router();
router.use('/generals', GeneralRoute)
router.use('/weapon', WeaponRoute)

export default router