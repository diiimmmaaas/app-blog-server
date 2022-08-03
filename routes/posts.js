import {Router} from "express";
import {checkAuth} from "../utils/checkAuth.js";
import {createPost, getAllPosts, getPostById} from "../controllers/posts.js";

const router = new Router();

// Create post
// http://localhost:3002/api/posts
router.post("/", checkAuth, createPost);

// Get all posts
// http://localhost:3002/api/posts
router.get("/", getAllPosts);

// Get posts by id
// http://localhost:3002/api/posts/:id
router.get("/:id", getPostById);

export default router;