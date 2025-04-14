import express from 'express';
import { userValidation } from '../validation/user.validation';
import { userController as UC } from '../controllers';

const userRouter = express.Router({ mergeParams: true });

userRouter.get('/', UC.getAllUsers);
userRouter.post('/', userValidation, UC.createUser);
userRouter.get('/:id', UC.getUserByClerkId);
userRouter.put('/:id', UC.updateUser);
userRouter.delete('/:id', UC.deleteUser);

export default userRouter;
