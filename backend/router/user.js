const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const postController = require('../Controllers/postController');

router.post('/addUser', userController.upload, userController.createUser);
router.post('/auth/login', userController.loginUser);
router.put('/updateUser', userController.upload, userController.updateUser);

// Adicionando o middleware de upload para as rotas de criação e atualização de postagens
router.post('/createPost', postController.createPost);
router.get('/getAllPosts', postController.getAllPosts);
router.get('/getPostById/:id', postController.getPostById);
router.put('/updatePost/:id', postController.upload, postController.updatePost);
router.delete('/deletePost/:id', postController.deletePost);

module.exports = router;
