const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Post = require('./Post');

const Comodidades = sequelize.define('Comodidades', {
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
    contato: {
        type: DataTypes.STRING,
    },
}, {
    tableName: 'Comodidades',
    timestamps: false
});

Comodidades.belongsTo(Post, { foreignKey: 'post_id' });

module.exports = Comodidades;
