module.exports = (sequelize, DataTypes) => {
    const MotorSpeed = sequelize.define('MotorSpeed', {
        time: DataTypes.DATE,
        value: DataTypes.DOUBLE,
    }, {});
    return MotorSpeed;
};