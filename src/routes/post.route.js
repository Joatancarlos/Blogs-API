const route = require('express').Router();
const validateJWT = require('../auth/validateJWT');
const { PostController } = require('../controllers');
const { postValidation, postPutValidation } = require('../middlewares/postValidations');

route.post('/', validateJWT, postValidation, PostController.createPost);
route.get('/', validateJWT, PostController.getAllPosts);
route.get('/:id', validateJWT, PostController.getPostById);
route.put('/:id', validateJWT, postPutValidation, PostController.updatePost);

module.exports = route;