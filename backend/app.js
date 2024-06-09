const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const userRoutes = require('./router/user');
// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rotas
app.use('/', userRoutes);

// Iniciar o servidor
app.listen(3000, () => {
    console.log('Server running on port 3000');
});
