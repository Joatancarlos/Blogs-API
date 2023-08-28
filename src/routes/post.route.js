const route = require('express').Router();
const validateJWT = require('../auth/validateJWT');
const { PostController } = require('../controllers');
const { postValidation, postPutValidation } = require('../middlewares/postValidations');

route.get('/search', validateJWT, PostController.searchPosts);
route.get('/:id', validateJWT, PostController.getPostById);
route.put('/:id', validateJWT, postPutValidation, PostController.updatePost);
route.delete('/:id', validateJWT, PostController.deletePost);
route.get('/', validateJWT, PostController.getAllPosts);
route.post('/', validateJWT, postValidation, PostController.createPost);

module.exports = route;