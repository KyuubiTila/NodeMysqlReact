module.exports = (sequelize, DataTypes) => {
  // "Users" as the name it should place the table as
  const Likes = sequelize.define('Likes');

  return Likes;
};
