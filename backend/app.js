const express = require('express');
const router = require('./Controller/router');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());

app.use(router);

const port = 3000;

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`, `http://localhost:${port}`);
});