module.exports = (sequelize, DataTypes) => {
    const Steering = sequelize.define('Steering', {
        time: DataTypes.DATE,
        value: DataTypes.DOUBLE,
    }, {});
    return Steering
};