module.exports = (sequelize, DataTypes) => {
    const Padding = sequelize.define('Padding', {
        time: DataTypes.DATE,
        value: DataTypes.DOUBLE, 
    }, {}); 
    return Padding; 
};

