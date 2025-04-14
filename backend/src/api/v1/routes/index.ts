import { Router } from 'express';
import transcribeRouter from './transcribe.router';

const router = Router();

router.use('/transribe', transcribeRouter);

export default router;
