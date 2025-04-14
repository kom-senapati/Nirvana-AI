import { Router } from 'express';
import { microExerciseController as MEC } from '../controllers';
import { microExerciseValidation } from '../validation/microExercise.validation';

const microExerciseRouter = Router({ mergeParams: true });

microExerciseRouter.get('/:userId', MEC.getUserMicroExercises);
microExerciseRouter.post('/generate', MEC.generateMicroExercise);
microExerciseRouter.get('/:microExerciseId/:userId', MEC.getMicroExerciseById);
microExerciseRouter.post('/:userId', microExerciseValidation, MEC.saveMicroExerciseWithReport);
microExerciseRouter.delete('/:microExerciseId', MEC.deleteMicroExercise);

export default microExerciseRouter;
