const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const PostController = require('../Controllers/postController');

router.post('/addUser', userController.upload, userController.createUser);

router.post('/auth/login', userController.loginUser);

router.post('/createPost', PostController.createPost);


module.exports = router;
