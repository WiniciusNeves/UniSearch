const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/addUser', userController.upload, userController.createUser);

router.post('/auth/login', userController.loginUser);


module.exports = router;
