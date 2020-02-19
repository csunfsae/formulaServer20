// get dependencies 
const Sequelize = require('sequelize');
const config = require('./config/config.js');

const db = {};
// sequelize initialization 
const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: config.dialect
});

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection successful');
    })
    .catch(err => {
        console.error('Unable to connect to the databse', err);
    });

module.exports = db; 