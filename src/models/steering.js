module.exports = (sequelize, DataTypes) => {
    const Steering = sequelize.define('Steering', {
        time: DataTypes.DATE,
        ms: DataTypes.INTEGER,
        value: DataTypes.DOUBLE,
    }, {});
    return Steering;
};