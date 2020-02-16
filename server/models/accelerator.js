module.exports = (sequelize, DataTypes) => {
    const Accelerator = sequelize.define('Accelerator', {
        time: DataTypes.DATE,
        value: DataTypes.DOUBLE,
    }, {});
    return Accelerator;
};