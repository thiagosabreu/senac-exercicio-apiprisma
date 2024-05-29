import { Router } from "express";
import { addPost, delPost, findAllPosts, getPostById, update } from "../controllers/PostController.js"

const router = Router();

router.post('/posts', addPost);
router.get('/posts', findAllPosts);

router.get('/posts/:id', getPostById);
router.put('/posts/:id', update);
router.delete('/posts/:id', delPost);

export default router;