const db = require('../models');

const Likes = db.Likes;

const like = async (req, res) => {
  const { PostId } = req.body;
  const UserId = req.user.id;
  const found = await Likes.findOne({
    where: { PostId: PostId, UserId: UserId },
  });
  if (!found) {
    await Likes.create({ PostId: PostId, UserId: UserId });
    res.json('Likes the post');
  } else {
    await Likes.destroy({ where: { PostId: PostId, UserId: UserId } });
    res.json('Unliked the post');
  }
};

module.exports = {
  like,
};
