const route = require('express').Router();
const validateJWT = require('../auth/validateJWT');
const { PostController } = require('../controllers');
const { postValidation, postPutValidation, sameUser } = require('../middlewares/postValidations');

route.post('/', validateJWT, postValidation, PostController.createPost);
route.get('/', validateJWT, PostController.getAllPosts);
route.get('/:id', validateJWT, PostController.getPostById);
route.put('/:id', validateJWT, postPutValidation, sameUser, PostController.updatePost);

module.exports = route;