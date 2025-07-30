// routes/uploadRoutes.js
import express from 'express';
import { upload, uploadSingleFile } from '../controllers/uploadController.js';

const router = express.Router();

// POST /api/upload/single
router.post('/single', upload.single('image'), uploadSingleFile);

export default router;
