import { Router } from 'express';
import { register, login, logout, getSupervisors } from '../controllers/authController';
import { authMiddleware, adminMiddleware } from '../middleware/authMiddleware';

const router = Router();

router.post('/register', register,adminMiddleware); // Hanya admin yang bisa mendaftarkan user baru
router.post('/login', login); // Login biasanya tidak dilindungi oleh middleware
router.post('/logout', authMiddleware, logout); // Logout dilindungi dengan authMiddleware

router.get('/supervisors', getSupervisors);
export default router;
