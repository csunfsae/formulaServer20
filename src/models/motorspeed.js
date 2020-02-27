module.exports = (sequelize, DataTypes) => {
    const MotorSpeed = sequelize.define('MotorSpeed', {
        time: DataTypes.DATE,
        ms: DataTypes.INTEGER,
        value: DataTypes.DOUBLE,
    }, {});
    return MotorSpeed;
};