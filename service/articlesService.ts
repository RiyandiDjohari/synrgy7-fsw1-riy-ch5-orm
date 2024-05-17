import { Request, Response } from "express";
import { ArticlesModel } from "../model/article.model";

export const getArticles = async (req: Request, res: Response) => {
  const articles = await ArticlesModel.query().withGraphFetched('comments');
  res.status(200).json(articles);
};

export const getArticleById = async (req: Request, res: Response) => {
  const id = req.params.id;

  const articles = await ArticlesModel.query().findById(id);
  if (articles) {
    res.status(200).json({ message: "Success", data: articles });
  } else {
    res.status(400).json({ message: "Something Went Wrong" });
  }
};

export const createArticle = async (req: Request, res: Response) => {
  const payload = req.body;

  if (payload) {
    const article = await ArticlesModel.query().insert(payload);
    res.status(201).json({ message: "Create new article successfull", article });
  } else {
    res.status(400).json({ message: "Something went wrong" });
  }
};

export const deleteArticleById = async (req: Request, res: Response) => {
  const { id } = req.params;

  const deletedArticle = await ArticlesModel.query().deleteById(id);

  if (deletedArticle) {
    res.status(200).json({ message: `Delete article with id ${id} successfull` });
  } else {
    res.status(400).json({ message: "Something Went Wrong" });
  }
};

export const updateArticle = async (req: Request, res: Response) => {
  const { id } = req.params;
  const payload = req.body;

  const updatedArticle = await ArticlesModel.query().findById(id).patch(payload);

  if (updatedArticle) {
    res.status(200).json({ message: `Updated article with id ${id} successfull`, data: updatedArticle });
  } else {
    res.status(400).json({ message: "Something Went Wrong" });
  }
};
