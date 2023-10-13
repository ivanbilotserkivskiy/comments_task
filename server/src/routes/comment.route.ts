import express from 'express';
import { addComment, getComments } from '../controllers/comment.controller';

const commentRouter = express.Router();

commentRouter.get('/', getComments);
commentRouter.post('/', addComment);


export default commentRouter;