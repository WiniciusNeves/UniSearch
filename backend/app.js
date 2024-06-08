const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const userRoutes = require('./router/user');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use('/user', userRoutes);


const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
