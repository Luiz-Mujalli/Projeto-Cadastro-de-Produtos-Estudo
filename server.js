require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTIONSTRING).then(() => {
    console.log('Conectado ao banco de dados com sucesso.');
    app.emit('pronto');
}).catch(e => console.log(e));

const session = require('express-session');
const flash = require('connect-flash');
const path = require('path');
const csrf = require('csurf');
const { checkCsrfError, csrfMiddleware, flashMessages, infoUserLogged } = require('./src/middlewares/middleware');
const routes = require('./routes');


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'public')));
app.use('/frontend', express.static(path.resolve(__dirname, 'frontend')));

app.use(session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
    cookie: {maxAge: 1000 * 60 * 60 * 24},
    httpOnly: true
}));
app.use(csrf());
app.use(flash());

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(csrfMiddleware, checkCsrfError, flashMessages, infoUserLogged);
app.use(routes);

app.on('pronto', () => {
    app.listen(3000, () => {
        console.log('Servidor Rodando');
        console.log('http://localhost:3000');
    });
});