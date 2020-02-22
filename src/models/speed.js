module.exports = (sequelize, DataTypes) => {
    const Speed = sequelize.define('Speed', {
        time: DataTypes.DATE,
        fl: DataTypes.DOUBLE,
        fr: DataTypes.DOUBLE,
        rl: DataTypes.DOUBLE,
        rr: DataTypes.DOUBLE,
    }, {});
    return Speed;
};