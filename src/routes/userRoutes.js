import { Router } from "express";
import { addUser, createUserPost, delUser, findAllUsers, getUserByEmail, update } from "../controllers/UserController.js";

const router = Router();

router.post('/users', addUser);
router.get('/users', findAllUsers);

router.get('/users/:email', getUserByEmail);
router.put('/users/:email', update);
router.delete('/users/:email', delUser);

router.delete('/users/:post', createUserPost);


export default router;