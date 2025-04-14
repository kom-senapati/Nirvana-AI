import express from 'express';
import { transcribeController } from '../controllers';
import upload from '../../../middleware/multer';

const transcribeRouter = express.Router();

transcribeRouter.post('/', upload.single('voice'), transcribeController.transcribe);

export default transcribeRouter;
