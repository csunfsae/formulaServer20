module.exports = (sequelize, DataTypes) => {
    const Accelerometer = sequelize.define('Accelerometer', {
        time: DataTypes.DATE,
        x: DataTypes.DOUBLE,
        y: DataTypes.DOUBLE,
        z: DataTypes.DOUBLE,
    }, {});
    return Accelerometer;
};