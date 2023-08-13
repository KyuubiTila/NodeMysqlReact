const {
  createUsers,
  login,
  actualToken,
} = require('../controllers/usersController');
const { validateToken } = require('../middleware/AuthMiddleware');

const userRouter = require('express').Router();

userRouter.post('/', createUsers);
userRouter.post('/login', login);
userRouter.get('/actualToken', validateToken, actualToken);

module.exports = userRouter;
