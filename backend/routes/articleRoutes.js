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
import authMiddleware from "../middleware/authMiddleware.js";

const articlesRouter = express.Router();

// Public reads
articlesRouter.get("/", getAllArticles);
articlesRouter.get("/all", getAllForAdmin);
articlesRouter.get("/:id", getArticleById);

// Protected writes
articlesRouter.post("/", authMiddleware, createArticle);
articlesRouter.put("/:id", authMiddleware, updateArticle);
articlesRouter.delete("/:id", authMiddleware, deleteArticle);
articlesRouter.patch("/admin/:id", authMiddleware, approveArticle);

export default articlesRouter;
