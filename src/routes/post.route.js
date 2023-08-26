const route = require('express').Router();
const validateJWT = require('../auth/validateJWT');
const { PostController } = require('../controllers');
const postValidation = require('../middlewares/postValidations');

route.post('/', validateJWT, postValidation, PostController.createPost);

module.exports = route;