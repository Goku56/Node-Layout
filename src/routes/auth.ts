import express from 'express';
import { signup } from '../controllers/authController';

const router = express.Router();

router.post('/register', signup);

export default router;
