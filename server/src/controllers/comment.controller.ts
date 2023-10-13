import { Response, Request } from 'express';
import { Comment } from '../models/Comment';

export const getComments = async(req: Request, res: Response) => {
  try {
    const allComents = await Comment.findAll({
      order: [['id', 'DESC']]
    });

    res.send(allComents)
  } catch {
    res.send({
      "message": "Can not get comments"
    })
  }
}

export const addComment = async (req: Request, res: Response) => {
  const { comment_text, file_path, parent_id } = req.body;

  try {
    const createdComment = Comment.build({ comment_text, file_path, parent_id });
    createdComment.save();

    res.send(createdComment);
  } catch {
    res.send({ "message": "Can not create a comment"});
  }
}

export const getCommentTree = async (req: Request, res: Response) => {
  try {
    const comments = await Comment.findAll({});

    res.send(comments);
  } catch {
    res.send({ "message": "Can not get comment tree" });
  }
}