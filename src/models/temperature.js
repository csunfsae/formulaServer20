module.exports = (sequelize, DataTypes) => {
    const Temperature = sequelize.define('Temperature', {
        time: DataTypes.DATE,
        ms: DataTypes.INTEGER,
        value: DataTypes.DOUBLE,
    }, {});
    return Temperature;
};

// time: DataTypes.Double,
// value: DataTypes.DOUBLE,
// device: DataTypes.String, 