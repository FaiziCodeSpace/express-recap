import { Router } from "express";
import { getUsers, postUsers } from "../controllers/userController.js";

const router = Router();

router.get('/:id', getUsers);

router.post('/register', postUsers);



export default router;