import { Router } from "express";
import { deleteUsers, getUsers, postUsers, putUsers } from "../controllers/userController.js";

const router = Router();

router.get('/:id', getUsers);

router.post('/data', postUsers);

router.put('/data/:id', putUsers);

router.delete('/data/:id', deleteUsers);

export default router;