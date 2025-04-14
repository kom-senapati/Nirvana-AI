import Joi from 'joi';
import type { CustomRequest } from '../../../types';
import type { NextFunction, Response } from 'express';
import { validateSchema } from '../../../helper/schemaValidation';

export const chatbotValidation = (req: CustomRequest, res: Response, next: NextFunction) => {
   const schema = Joi.object().keys({
      name: Joi.string().required(),
      system_prompt: Joi.string().required(),
      slug: Joi.string().required(),
      image: Joi.string().required(),
   });

   validateSchema({ schema, req, next });
};
