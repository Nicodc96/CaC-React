import express from 'express';
import { getAllPosts, getPost, createPost, updatePost, deletePost } from '../controllers/PostController.js';

const postRouter = express.Router();

postRouter.get("/", getAllPosts);
postRouter.get("/:id", getPost);
postRouter.post("/", createPost);
postRouter.put("/:id", updatePost);
postRouter.delete("/:id", deletePost);

export default postRouter;