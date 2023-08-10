module.exports = (sequelize, DataTypes) => {
  // "C" as the name it should place the table as
  const Comments = sequelize.define('Comments', {
    comment: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  // Comments.associate = (models) => {
  //   Comments.belongsTo(models.Posts);
  // };

  // Comments.associate = (models) => {
  //   Comments.belongsTo(models.Posts, {
  //     foreignKey: 'PostId',
  //   });
  // };

  return Comments;
};
