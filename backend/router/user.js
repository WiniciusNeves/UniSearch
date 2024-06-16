const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const postController = require('../Controllers/postController');

router.post('/addUser', userController.upload, userController.createUser);
router.post('/auth/login', userController.loginUser);
router.put('/updateUser', userController.upload, userController.updateUser);
router.post('/createPost', postController.createPost);
router.get('/getAllPosts', postController.getAllPosts, postController.upload);
router.get('/getPostById/:id', postController.getPostById);
router.put('/updatePost/:id', postController.updatePost);
router.delete('/deletePost/:id', postController.deletePost);

module.exports = router;