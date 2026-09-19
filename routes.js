const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const authController = require('./src/controllers/authController');
const produtosController = require('./src/controllers/produtosController');
const { checkUserLogged } = require('./src/middlewares/middleware');

route.get('/', homeController.index);

route.get('/register', authController.register);
route.post('/register', authController.cadastraUsuario);

route.get('/login', authController.login);
route.post('/login', authController.loginUsuario);

route.get('/perfilDoUsuario', checkUserLogged, authController.perfilDoUsuario);
route.post('/perfilDoUsuario', produtosController.cadastraProduto);
route.post('/perfilDoUsuario/delete/:id', produtosController.deletaProduto);
route.post('/perfilDoUsuario/edit/:id', produtosController.editaProduto);

route.get('/logout', authController.logout);

module.exports = route;