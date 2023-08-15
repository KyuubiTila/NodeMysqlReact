module.exports = (sequelize, DataTypes) => {
  // "Users" as the name it should place the table as
  const Users = sequelize.define('Users', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  // POSTS TABLE ASSOCIATION WITH COMMENTS TABLE, hence creating the PostId on the comment table in respect to the post ID
  Users.associate = (models) => {
    Users.hasMany(models.Posts, {
      onDelete: 'cascade',
    });
    Users.hasMany(models.Likes, {
      onDelete: 'cascade',
    });
  };
  return Users;
};
