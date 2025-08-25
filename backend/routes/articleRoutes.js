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
import adminMiddleware from "../middleware/adminMiddleware.js";

const articlesRouter = express.Router();

// Admin Routes
articlesRouter.get("/all", authMiddleware, adminMiddleware, getAllForAdmin);
articlesRouter.patch("/admin/:id", authMiddleware, adminMiddleware, approveArticle);

// Public reads
articlesRouter.get("/", getAllArticles);
articlesRouter.get("/:id", getArticleById);

// Protected writes
articlesRouter.post("/", authMiddleware, createArticle);
articlesRouter.put("/:id", authMiddleware, updateArticle);
articlesRouter.delete("/:id", authMiddleware, deleteArticle);

export default articlesRouter;
