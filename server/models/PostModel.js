module.exports = (sequelize, DataTypes) => {
  // "Posts" as the name it should place the table as
  const Posts = sequelize.define('Posts', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    postText: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  // POSTS TABLE ASSOCIATION WITH COMMENTS TABLE, hence creating the PostId on the comment table in respect to the post ID
  Posts.associate = (models) => {
    Posts.hasMany(models.Comments, {
      onDelete: 'cascade',
    });
  };

  return Posts;
};
