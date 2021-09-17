import express from 'express';
import { v4 as uuidv4, v4 } from 'uuid';

let users = [];

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
    console.log(`POST request successful. Added ${user.firstName}`);
    res.send(`POST request successful. Added ${user.firstName}`)
})

// get specific user by userId
router.get('/:userId', (req, res) => {
    const { userId } = req.params;
    const userFound = users.find((user) => user.userId === userId);
    res.send(userFound)
})

// delete a specific userf by userId
router.delete('/:userId', (req, res) => {
    const { userId } = req.params;
    users = users.filter((user) => user.userId != userId);

    res.send(`deleting ${userId}`);
})

router.patch('/:userId', (req, res) => {
    const { userId } = req.params;
    const { firstName, lastName, age } = req.body;
    const userToBeUpdated = users.find((user) => user.userId === userId);

    if (firstName) userToBeUpdated.firstName = firstName;
    if (lastName) userToBeUpdated.lastName = lastName;
    if (age) userToBeUpdated.age = age;

    res.send(`successfully updated userid ${userId}`);
});

export default router;