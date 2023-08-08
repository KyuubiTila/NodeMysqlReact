const { createUsers, login } = require('../controllers/usersController');

const userRouter = require('express').Router();

userRouter.post('/', createUsers);
userRouter.post('/login', login);

module.exports = userRouter;
