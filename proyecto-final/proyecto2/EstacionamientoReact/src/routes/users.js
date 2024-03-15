import { Router } from 'express';
import { getUsers, getUser, saveUser, deleteUser, updateUser } from '../controllers/users';

const router = Router();

router.get('/users', getUsers);
router.get('/users/:id', getUser);

router.post('/users', saveUser);
router.delete('/users/:id', deleteUser);
router.put('/users/:id', updateUser);

export default router;
