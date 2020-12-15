const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const userRouter = require('./users/users-router');
const registerRouter = require('./auth/register-router');
const loginRouter = require('./auth/login-router');

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());

server.use('/api/register', registerRouter);
server.use('/api/login', loginRouter);
server.use('/api/users', userRouter);

server.get('/', (req, res) => {
    res.json({api:'up'});
});

module.exports = server;
