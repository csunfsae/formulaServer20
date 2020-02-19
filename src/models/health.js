
module.exports = (sequelize, DataTypes) => {
  const Health = sequelize.define('Health', {
    time: DataTypes.DATE,
    active: DataTypes.BOOLEAN,
    device: DataTypes.STRING,
  }, {});

  return Health;
};
