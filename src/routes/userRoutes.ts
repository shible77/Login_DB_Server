import express from 'express';
import { createUser, loginUser } from '../controllers/userControllers';
const userRouter = express.Router();

userRouter.post('/user', createUser)
userRouter.get('/user',loginUser)


export default userRouter;
