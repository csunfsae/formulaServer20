module.export = (sequelize, DataTypes) => {
    const Brake = sequelize.define('Brake', {
        time: DataTypes.DATE,
        value: DataTypes.DOUBLE,
    }, {});

    return Brake; 
}