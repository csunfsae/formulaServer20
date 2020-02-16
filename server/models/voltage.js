
module.exports = (sequelize, DataTypes) => {
  const Voltage = sequelize.define('Voltage', {
    time: DataTypes.DATE,
    value: DataTypes.BIGINT,
    device: DataTypes.STRING,
    state_charge: DataTypes.BIGINT,
  }, {});

  return Voltage;
};
