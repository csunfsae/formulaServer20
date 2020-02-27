module.exports = (sequelize, DataTypes) => {
    const Gyroscope = sequelize.define('Gyroscope', {
        time: DataTypes.DATE,
        ms: DataTypes.INTEGER,
        x: DataTypes.DOUBLE,
        y: DataTypes.DOUBLE,
        z: DataTypes.DOUBLE,
    }, {});
    return Gyroscope;
};