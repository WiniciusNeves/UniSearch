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

const Posts = connection.define('Posts', {
    titulo : {
        type: DataTypes.STRING,
        allowNull: false
    },
    conteudo : {
        type: DataTypes.STRING,
        allowNull: false
    },
    email : {
        type: DataTypes.STRING,
        allowNull: false
    },
    dataI : {
        type: DataTypes.DATE,
        allowNull: false
    },
    dataF : {
        type: DataTypes.DATE,
        allowNull: false
    },
    Local : {
        type: DataTypes.STRING,
        allowNull: false
    },
    Foto : {
        type: DataTypes.STRING,
        allowNull: false
    },
    Video : {
        type: DataTypes.STRING,
        allowNull: false
    },
    Situacao : {
        type: DataTypes.STRING,
        allowNull: false
    },
    Categoria : {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    // Additional model options
    tableName: 'posts',
    timestamps: false
});

connection.sync({ alter: true })
    .then(() => {
        console.log('Tabela Posts criada com sucesso');
    })
    .catch(err => {
        console.error('Erro ao criar tabela:', err);
    });

module.exports = { Posts, connection };
