import express from "express";
import {
  createArticle,
  getAllArticles,
  getArticleById,
  updateArticle,
  deleteArticle,
} from "../controllers/articleControllers.js";

const articlesRouter = express.Router();

articlesRouter.post("/", createArticle);
articlesRouter.get("/", getAllArticles);
articlesRouter.get("/:id", getArticleById);
articlesRouter.put("/:id", updateArticle);
articlesRouter.delete("/:id", deleteArticle);

export default articlesRouter;
