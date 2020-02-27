module.exports = (sequelize, DataTypes) => {
    const Voltage = sequelize.define('Voltage', {
        time: DataTypes.DATE,
        ms: DataTypes.INTEGER,
        value: DataTypes.DOUBLE,
    }, {});
    return Voltage;
};