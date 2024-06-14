const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Post = require('./Post');
const User = require('./User');

const Eventos = sequelize.define('Eventos', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    post_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Posts', // Nome da tabela, não do modelo
            key: 'id'
        }
    },
    nome: {
        type: DataTypes.STRING,
    },
    descricao: {
        type: DataTypes.TEXT,
    },
    foto: {
        type: DataTypes.STRING,
    },
    video: {
        type: DataTypes.STRING,
    },
    data_inicio: {
        type: DataTypes.STRING,
    },
    data_fim: {
        type: DataTypes.STRING,
    },
    email_contato: {
        type: DataTypes.STRING,
    },
    endereco: {
        type: DataTypes.STRING,
    },
    cep: {
        type: DataTypes.STRING,
    },
    cidade: {
        type: DataTypes.STRING,
    },
    uf: {
        type: DataTypes.STRING,
    },
    complemento: {
        type: DataTypes.STRING,
    },
}, {
    tableName: 'Eventos',
    timestamps: false
});

Eventos.belongsTo(Post, { foreignKey: 'post_id' });

module.exports = Eventos;
