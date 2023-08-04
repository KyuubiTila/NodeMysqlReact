const db = require('../models');

const Post = db.Posts;

// 1 create product
const createPost = async (req, res) => {
  const post = req.body;
  await Post.create(post);
  res.status(200).send(post);
  console.log(post);
};

// 2 GET ALL POST
const getAllPosts = async (req, res) => {
  const allPosts = await Post.findAll({});
  res.status(200).send(allPosts);
  console.log(allPosts);
};

// 3 DELETE POST
const deleteIndividualPost = async (req, res) => {
  const id = req.params.id;
  const deletedPost = await Post.destroy({ where: { id: id } });
  res.status(200).send('post is deleted');
  console.log(deletedPost);
};

// 3 UPDATE POST
const updateIndividualPost = async (req, res) => {
  const id = req.params.id;
  await Post.update(req.body, { where: { id: id } });
  res.status(200).send(req.body);
  console.log(req.body);
};

module.exports = {
  createPost,
  getAllPosts,
  deleteIndividualPost,
  updateIndividualPost,
};
