const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Post = require('./Post');

const Aviso = sequelize.define('Aviso', {
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
    }
}, {
    tableName: 'Aviso',
    timestamps: false
});

Aviso.belongsTo(Post, { foreignKey: 'post_id' });

module.exports = Aviso;
