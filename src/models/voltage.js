module.exports = (sequelize, DataTypes) => {
    const Voltage = sequelize.define('Voltage', {
        time: DataTypes.DATE,
        value: DataTypes.DOUBLE,
    }, {});
    return Voltage;
};