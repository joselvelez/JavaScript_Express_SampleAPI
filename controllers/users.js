import { v4 as uuidv4, v4 } from 'uuid';

let users = [];

export const getUsers = (req, res) => {
    res.send(users);
};

export const createUser = (req, res) => {
    const user = req.body;
    users.push({...user, userId: v4()});
    console.log(`POST request successful. Added ${user.firstName}`);
    res.send(`POST request successful. Added ${user.firstName}`)
};

export const getUser = (req, res) => {
    const { userId } = req.params;
    const userFound = users.find((user) => user.userId === userId);
    res.send(userFound)
};

export const deleteUser = (req, res) => {
    const { userId } = req.params;
    users = users.filter((user) => user.userId != userId);

    res.send(`deleting ${userId}`);
};

export const updateUser = (req, res) => {
    const { userId } = req.params;
    const { firstName, lastName, age } = req.body;
    const userToBeUpdated = users.find((user) => user.userId === userId);

    if (firstName) userToBeUpdated.firstName = firstName;
    if (lastName) userToBeUpdated.lastName = lastName;
    if (age) userToBeUpdated.age = age;

    res.send(`successfully updated userid ${userId}`);
};