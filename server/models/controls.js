
module.exports = (sequelize, DataTypes) => {
  const Controls = sequelize.define('Controls', {
    time: DataTypes.DATE,
    active: DataTypes.BOOLEAN,
    type: DataTypes.STRING,
    device: DataTypes.STRING,
  }, {});

  return Controls;
};
