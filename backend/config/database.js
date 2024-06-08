require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');


const sequelize = new Sequelize('unisearch', 'root', '123', {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mysql',
    port: 3306
});
module.exports = sequelize;

