import { Router } from "express";
import { getUsers, login, postUsers } from "../controllers/userController.js";

const router = Router();

router.get('/:id', getUsers);

router.post('/register', postUsers);

router.post('/login', login);



export default router;