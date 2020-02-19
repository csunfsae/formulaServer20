
module.exports = (sequelize, DataTypes) => {
  const Canbus = sequelize.define('Canbus', {
    can_id: DataTypes.STRING,
    can_data: DataTypes.STRING,
    device: DataTypes.STRING,
  }, {});

  return Canbus;
};
