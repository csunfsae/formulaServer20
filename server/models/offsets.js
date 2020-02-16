
module.exports = (sequelize, DataTypes) => {
  const Offsets = sequelize.define('Offsets', {
    time: DataTypes.DATE,
    value: DataTypes.BIGINT,
    device: DataTypes.STRING,
  }, {});

  return Offsets;
};
