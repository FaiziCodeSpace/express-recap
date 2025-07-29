import { Router } from "express";
import { createProfile, deleteUsers, getProfile, getUsers, postUsers, putUsers } from "../controllers/userController.js";
import { registerUser, userDetails } from "../controllers/userRegistration.js";

const router = Router();

router.get('/', getUsers);

router.post('/data', postUsers);

router.put('/data/:id', putUsers);

router.delete('/data/:id', deleteUsers);

router.get('/getProfile/:id', getProfile);

router.post('/createProfile', createProfile);

router.post('/register', registerUser);

router.get('/userDetails/:id', userDetails);

export default router;