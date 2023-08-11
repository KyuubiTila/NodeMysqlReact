const {
  createComment,
  getAllComments,
  getIndividualComment,
  deleteIndividualComment,
  updateComment,
} = require('../controllers/commentController');
const { validateToken } = require('../middleware/AuthMiddleware');

const commentRouter = require('express').Router();

commentRouter.post('/', validateToken, createComment);
commentRouter.get('/', getAllComments);
commentRouter.get('/:id', getIndividualComment);
commentRouter.delete('/:id', validateToken, deleteIndividualComment);
commentRouter.put('/:id', updateComment);

module.exports = commentRouter;
