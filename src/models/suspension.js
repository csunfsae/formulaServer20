module.exports = (sequelize, DataTypes) => {
    const Suspension = sequelize.define('Suspension', {
        time: DataTypes.DATE,
        fl: DataTypes.DOUBLE,
        fr: DataTypes.DOUBLE,
        rl: DataTypes.DOUBLE,
        rr: DataTypes.DOUBLE,
    }, {});
    return Suspension;
};