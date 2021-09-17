import express from 'express';
import { v4 as uuidv4, v4 } from 'uuid';

const users = [];

// initialize Router
const router = express.Router();

// get list of all users
router.get('/', (req, res) => {
    res.send(users)
});

// create new user
router.post('/', (req, res) => {
    const user = req.body;
    users.push({...user, userId: v4()});
    console.log(`POST request successful.`);
    res.send('POST successful')
})

// get specific user by userID
router.get('/:userId', (req, res) => {
    const { userId } = req.params;
    const userFound = users.find((user) => user.userId === userId);
    res.send(userFound)
})

export default router;