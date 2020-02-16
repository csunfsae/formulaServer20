module.exports = (sequelize, DataTypes) => {
  const Pressure = sequelize.define('Pressure', {
    time: DataTypes.DATE,
    value: DataTypes.BIGINT,
    device: DataTypes.STRING,
  }, {});

  return Pressure;
};
