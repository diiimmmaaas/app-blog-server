import {Router} from "express";
import {checkAuth} from "../utils/checkAuth.js";
import {
    createPost,
    deletePost,
    getAllPosts,
    getMyPosts,
    getPostById,
    getPostComments,
    updatePost
} from "../controllers/posts.js";

const router = new Router();

// Create post
// http://localhost:3002/api/posts
router.post("/", checkAuth, createPost);

// Get all posts
// http://localhost:3002/api/posts
router.get("/", getAllPosts);

// Get post by id
// http://localhost:3002/api/posts/:id
router.get("/:id", getPostById);

// Get my posts
// http://localhost:3002/api/posts/user/me
router.get("/user/me", checkAuth, getMyPosts);

// Delete post
// http://localhost:3002/api/posts/:id
router.delete("/:id", checkAuth, deletePost);

// Update post
// http://localhost:3002/api/posts/:id
router.put("/:id", checkAuth, updatePost);

// Get post comments
// http://localhost:3002/api/posts/comments/:id
router.get("/comments/:id", getPostComments);

export default router;