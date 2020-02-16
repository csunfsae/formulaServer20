
module.exports = (sequelize, DataTypes) => {
  const SuspensionOffset = sequelize.define('SuspensionOffset', {
    time: DataTypes.DATE,
    fr: DataTypes.DOUBLE,
    fl: DataTypes.DOUBLE,
    rr: DataTypes.DOUBLE,
    rl: DataTypes.DOUBLE,
  }, {});

  return SuspensionOffset;
};
