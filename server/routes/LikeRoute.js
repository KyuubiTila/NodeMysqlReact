const { like } = require('../controllers/likeController');
const { validateToken } = require('../middleware/AuthMiddleware');

const likeRouter = require('express').Router();

likeRouter.post('/', validateToken, like);

module.exports = likeRouter;
