const {
  createPost,
  getAllPosts,
  deleteIndividualPost,
  updateIndividualPost,
  getIndividualPost,
  getIndividualPostComments,
} = require('../controllers/postController');
const { validateToken } = require('../middleware/AuthMiddleware');

const postRouter = require('express').Router();

postRouter.post('/', validateToken, createPost);
postRouter.get('/allPosts', getAllPosts);
postRouter.get('/:id', getIndividualPost);
postRouter.delete('/:id', validateToken, deleteIndividualPost);
postRouter.put('/:id', validateToken, updateIndividualPost);
postRouter.get('/:id/comment', getIndividualPostComments);

module.exports = postRouter;
