module.exports = (sequelize, DataTypes) => {
    const Accelerator = sequelize.define('Accelerator', {
        time: DataTypes.DATE,
        x: DataTypes.DOUBLE,
        y: DataTypes.DOUBLE,
        z: DataTypes.DOUBLE,
    }, {});
    return Accelerator;
};