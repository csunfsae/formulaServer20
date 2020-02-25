module.exports = (sequelize, DataTypes) => {
    const WaterTemperature = sequelize.define('WaterTemperature', {
        time: DataTypes.DATE, 
        value: DataTypes.DOUBLE, 
    }, {})
    return WaterTemperature;
}; 