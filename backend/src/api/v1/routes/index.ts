import { Router } from 'express';
import transcribeRouter from './transcribe.router';
import userRouter from './user.router';
import journalRouter from './journal.router';

const router = Router();

router.use('/transribe', transcribeRouter);
router.use('/users', userRouter);
router.use('/journals', journalRouter);

export default router;
