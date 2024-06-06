const sequelize = require('./database');
const User = require('../Models/User');
const Post = require('../Models/Post');
const Atletica = require('../Models/Atletica');
const Aviso = require('../Models/Aviso');
const Comodidades = require('../Models/Comodidades');
const Eventos = require('../Models/Eventos');

sequelize.sync({ force: true })
    .then(() => {
        console.log('Database & tables created!');
    })
    .catch(err => {
        console.error('Unable to create tables, shutting down...', err);
    });

