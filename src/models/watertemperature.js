module.exports = (sequelize, DataTypes) => {
    const WaterTemperature = sequelize.define('WaterTemperature', {
        time: DataTypes.DATE, 
        ms: DataTypes.INTEGER,
        value: DataTypes.DOUBLE, 
    }, {})
    return WaterTemperature;
}; 