import express from 'express';
import { chatbotController as CC } from '../controllers';
import { chatbotValidation } from '../validation/chatbot.validation';

const chatbotRouter = express.Router({ mergeParams: true });

chatbotRouter.get('/', CC.getAllChatbots);
chatbotRouter.post('/', chatbotValidation, CC.createChatbot);
chatbotRouter.put('/:id', CC.updateChatbot);
chatbotRouter.delete('/:id', CC.deleteChatbot);
chatbotRouter.post('/upload/many', CC.createManyChatbot);

export default chatbotRouter;
