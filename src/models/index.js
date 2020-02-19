const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');


const basename = path.basename(__filename);

const config = require(`${__dirname}/../config/config.js`);
// const config = require(`${__dirname}/../config/config.js`); /* eslint-disable-line import/no-dynamic-require */
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect
});

fs
  .readdirSync(__dirname)
  .filter(file => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;