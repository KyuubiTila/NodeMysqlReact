const {
  createComment,
  getAllComments,
  getIndividualComment,
  deleteIndividualComment,
  updateComment,
} = require('../controllers/commentController');

const commentRouter = require('express').Router();

commentRouter.post('/', createComment);
commentRouter.get('/', getAllComments);
commentRouter.get('/:id', getIndividualComment);
commentRouter.delete('/:id', deleteIndividualComment);
commentRouter.put('/:id', updateComment);

module.exports = commentRouter;
