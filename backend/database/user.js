require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');

// Fetching environment variables
const dbName = process.env.DB_NAME || 'unisearch';
const dbUser = process.env.DB_USER || 'root';
const dbPassword = process.env.DB_PASSWORD || '123';
const dbHost = process.env.DB_HOST || '127.0.0.1';
const dbPort = process.env.DB_PORT || 3306;

const connection = new Sequelize(dbName, dbUser, dbPassword, {
    host: dbHost,
    dialect: 'mysql',
    port: dbPort
});

const User = connection.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    // Additional model options
    tableName: 'users',
    timestamps: false
});

connection.sync({ alter: true })
    .then(() => {
        console.log('Tabela criada com sucesso');
    })
    .catch(err => {
        console.error('Erro ao criar tabela:', err);
    });

module.exports = { User, connection };
