import { Request, Response } from "express";
import { CommentsModel } from "../model/comments.model";

export const getComments = async (req: Request, res: Response) => {
  const comments = await CommentsModel.query().withGraphFetched('article');
  res.status(200).json(comments);
};

export const getCommentById = async (req: Request, res: Response) => {
  const id = req.params.id;

  const comment = await CommentsModel.query().findById(id).withGraphFetched('article');
  if (comment) {
    res.status(200).json({ message: "Success", data: comment });
  } else {
    res.status(400).json({ message: "Something Went Wrong" });
  }
};

export const createComment = async (req: Request, res: Response) => {
  const payload = req.body;

  if (payload) {
    const comment = await CommentsModel.query().insert(payload);
    res.status(201).json({ message: "Create new comment successfull", comment });
  } else {
    res.status(400).json({ message: "Something went wrong" });
  }
};

export const deleteCommentById = async (req: Request, res: Response) => {
  const { id } = req.params;

  const deletedComment = await CommentsModel.query().deleteById(id);

  if (deletedComment) {
    res.status(200).json({ message: `Delete comment with id ${id} successfull` });
  } else {
    res.status(400).json({ message: "Something Went Wrong" });
  }
};

export const updateComment = async (req: Request, res: Response) => {
  const { id } = req.params;
  const payload = req.body;

  const updatedComment = await CommentsModel.query().findById(id).patch(payload);

  if (updatedComment) {
    res.status(200).json({ message: `Updated comment with id ${id} successfull`, data: updatedComment });
  } else {
    res.status(400).json({ message: "Something Went Wrong" });
  }
};
