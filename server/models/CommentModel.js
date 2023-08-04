module.exports = (sequelize, DataTypes) => {
  // "C" as the name it should place the table as
  const Comments = sequelize.define('Comments', {
    comment: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Comments;
};
