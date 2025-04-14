import Joi from 'joi';
import type { CustomRequest } from '../../../types';
import type { NextFunction, Response } from 'express';
import { validateSchema } from '../../../helper/schemaValidation';

export const journalValidation = (req: CustomRequest, res: Response, next: NextFunction) => {
   const schema = Joi.object().keys({
      title: Joi.string().required(),
      content: Joi.string().required(),
   });

   validateSchema({ schema, req, next });
};
