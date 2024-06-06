const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Post = require('./Post');

const Eventos = sequelize.define('Eventos', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    post_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Post,
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
        type: DataTypes.DATE,
    },
    data_fim: {
        type: DataTypes.DATE,
    },
    email_contato: {
        type: DataTypes.STRING,
    },
    local: {
        type: DataTypes.STRING,
    }
}, {
    tableName: 'Eventos',
    timestamps: false
});

Eventos.belongsTo(Post, { foreignKey: 'post_id' });

module.exports = Eventos;
