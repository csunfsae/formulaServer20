
module.exports = (sequelize, DataTypes) => {
  const Temperature = sequelize.define('Temperature', {
    time: DataTypes.DATE,
    value: DataTypes.BIGINT,
    device: DataTypes.STRING,
  }, {});

  return Temperature;
};
