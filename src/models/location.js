module.exports = (sequelize, DataTypes) => {
    const Location = sequelize.define('Location', {
        time: DataTypes.DATE, 
        ms: DataTypes.INTEGER,
        lat: DataTypes.DOUBLE,
        long: DataTypes.DOUBLE, 
    }, {});
    return Location;
};