import Joi from 'joi';
import type { CustomRequest } from '../../../types';
import type { NextFunction, Response } from 'express';
import { validateSchema } from '../../../helper/schemaValidation';

export const microExerciseValidation = (req: CustomRequest, res: Response, next: NextFunction) => {
   const schema = Joi.object({
      session_goal: Joi.string().required(),
      quick_check_in: Joi.object({
         mood_rating: Joi.number().min(1).max(10),
         primary_emotion: Joi.string(),
      }),
      exercise_content: Joi.object({
         qna: Joi.array()
            .items(
               Joi.object({
                  question: Joi.string().required(),
                  answer: Joi.string().required(),
               })
            )
            .length(2)
            .required(),
         mcq: Joi.array()
            .items(
               Joi.object({
                  question: Joi.string().required(),
                  options: Joi.array().items(Joi.string().required()).required(),
                  answers: Joi.array().items(Joi.string().required()).required(),
               })
            )
            .length(5)
            .required(),
      }).required(),
      user_reflection: Joi.object({
         mood_rating_after: Joi.number().min(1).max(10),
         reflection: Joi.string(),
      }),
   });

   validateSchema({ schema, req, next });
};
