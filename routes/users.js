import express from 'express';
import { getUsers, createUser, getUser, deleteUser, updateUser } from '../controllers/users.js';

// initialize Router
const router = express.Router();

// get list of all users
router.get('/', getUsers);

// create new user
router.post('/', createUser);

// get specific user by userId
router.get('/:userId', getUser);

// delete a specific userf by userId
router.delete('/:userId', deleteUser);

// update a specific user
router.patch('/:userId', updateUser);

export default router;