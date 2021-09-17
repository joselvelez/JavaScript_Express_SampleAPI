import usersRoutes from './routes/users.js';
import express from 'express';
import bodyParser from 'body-parser';
const app = express();
const PORT = 5000;

// Setup global middleware
app.use(bodyParser.json());
app.use('/users', usersRoutes);

app.get('/', (req, res) => {
    res.send('testing')
})

app.listen(PORT, () => {
    console.log(`server is running on port: http://localhost:${PORT}`);
});
