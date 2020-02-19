
module.exports = (sequelize, DataTypes) => {
  const Speed = sequelize.define('Speed', {
    time: DataTypes.DATE,
    value: DataTypes.FLOAT,
  }, {});

  return Speed;
};
