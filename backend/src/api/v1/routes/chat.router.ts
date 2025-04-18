import express from 'express';
import { chatController as CC } from '../controllers';
import { chatValidation } from '../validation/chat.validation';

const chatRouter = express.Router({ mergeParams: true });

chatRouter.post('/:chatbotId', chatValidation, CC.chat);

export default chatRouter;
