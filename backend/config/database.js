require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');


const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER || 'root';
const dbPassword = process.env.DB_PASSWORD || 'Andre4584';
const dbHost = process.env.DB_HOST || 'localhost';
const dbPort = process.env.DB_PORT || 3306;

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
    host: dbHost,
    dialect: 'mysql',
    port: dbPort
});
module.exports = sequelize;

