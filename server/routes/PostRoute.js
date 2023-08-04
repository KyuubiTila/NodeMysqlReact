const {
  createPost,
  getAllPosts,
  deleteIndividualPost,
  updateIndividualPost,
  getIndividualPost,
} = require('../controllers/postController');

const postRouter = require('express').Router();

postRouter.post('/', createPost);
postRouter.get('/allPosts', getAllPosts);
postRouter.get('/:id', getIndividualPost);
postRouter.delete('/:id', deleteIndividualPost);
postRouter.put('/:id', updateIndividualPost);

module.exports = postRouter;
