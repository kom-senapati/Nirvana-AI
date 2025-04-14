import { Router } from 'express';
import transcribeRouter from './transcribe.router';
import userRouter from './user.router';
import journalRouter from './journal.router';
import chatbotRouter from './chatbot.router';
import chatRouter from './chat.router';
import microExerciseRouter from './microExercise.router';

const router = Router();

router.use('/transribe', transcribeRouter);
router.use('/users', userRouter);
router.use('/journals', journalRouter);
router.use('/chatbots', chatbotRouter);
router.use('/chat', chatRouter);
router.use('/micro-exercises', microExerciseRouter);

export default router;
