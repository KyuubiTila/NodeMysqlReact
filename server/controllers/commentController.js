const db = require('../models');

const Comment = db.Comments;

// 1 create comment
const createComment = async (req, res) => {
  const comment = req.body;
  // grabing the username from the token generated from the login which contains the username and id of the loggedin user
  const username = req.user.username;
  comment.username = username;
  const newComment = await Comment.create(comment);
  res.status(201).send(newComment);
};

// 2 GET ALL COMMENTS
const getAllComments = async (req, res) => {
  const allComments = await Comment.findAll({});
  res.status(200).send(allComments);
  console.log(allComments);
};

// 3 GET INDIVIDUAL COMMENT
const getIndividualComment = async (req, res) => {
  const id = req.params.id;
  const singleComment = await Comment.findOne({ where: { id: id } });
  res.status(200).send(singleComment);
  console.log(singleComment);
};

// 4 DELETE COMMENT
const deleteIndividualComment = async (req, res) => {
  const id = req.params.id;
  const deletedComment = await Comment.destroy({ where: { id: id } });
  res.status(200).send('comment is deleted');
  console.log(deletedComment);
};

// 5 UPDATE COMMENT
const updateComment = async (req, res) => {
  const id = req.params.id;
  await Comment.update(req.body, { where: { id: id } });
  res.status(200).send(req.body);
  console.log(req.body);
};

module.exports = {
  createComment,
  getAllComments,
  getIndividualComment,
  deleteIndividualComment,
  updateComment,
};
