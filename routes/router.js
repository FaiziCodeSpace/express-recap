import { Router } from "express";
import { getUsers, login, postUsers, refreshToken } from "../controllers/userController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { registerValidation } from "../controllers/validatorController.js";
const router = Router();

router.get('/:id', authMiddleware, getUsers);

router.post('/register', registerValidation, postUsers);

router.post('/login', login);

router.post('/refresh', refreshToken);

export default router;