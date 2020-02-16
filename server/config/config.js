require('dotenv').config(); 

module.exports = { 
    database: process.env.DATABASE, 
    username: process.env.DATABASE, 
    password: process.env.DATABASE, 
    host: process.env.HOST,
    dialect: process.env.DIALECT,
    logging: false, 
};