import express from "express";
import {
  createArticle,
  getAllArticles,
  getArticleById,
  updateArticle,
  deleteArticle,
  approveArticle,
  getAllForAdmin
} from "../controllers/articleControllers.js";

const articlesRouter = express.Router();

articlesRouter.post("/", createArticle);
articlesRouter.get("/", getAllArticles);
articlesRouter.get("/all", getAllForAdmin);
articlesRouter.get("/:id", getArticleById);
articlesRouter.put("/:id", updateArticle);
articlesRouter.delete("/:id", deleteArticle);
articlesRouter.patch("/approve/:id", approveArticle);

export default articlesRouter;
