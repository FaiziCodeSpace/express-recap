import { Router } from "express";
import { getUsers, login, postUsers } from "../controllers/userController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = Router();

router.get('/:id', authMiddleware, getUsers);

router.post('/register', postUsers);

router.post('/login', login);

export default router;