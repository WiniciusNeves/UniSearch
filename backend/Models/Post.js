const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');

const Post = sequelize.define('Post', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id'
        }
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false
    },
    post_type: {
        type: DataTypes.ENUM('Atletica', 'Aviso', 'Evento', 'Comodidade'),
        allowNull: false
    }
}, {
    tableName: 'Posts',
    timestamps: false
});

Post.belongsTo(User, { foreignKey: 'user_id' });

module.exports = Post;
