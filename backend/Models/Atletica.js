const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Post = require('./Post');

const Atletica = sequelize.define('Atletica', {
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
    email_contato: {
        type: DataTypes.STRING,
    }
}, {
    tableName: 'Atletica',
    timestamps: false
});

Atletica.belongsTo(Post, { foreignKey: 'post_id' });

module.exports = Atletica;
