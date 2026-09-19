const UserService = require('../services/userService');
const ProdutosService = require('../services/produtosService');


exports.register = (req, res) => {
    res.render('register');
}

exports.cadastraUsuario = async (req, res) => {
    const user = new UserService(req.body);

    try {
        user.validate(false);

        if (user.errors.length > 0) {
            user.errors.forEach(erro => req.flash('error', erro));
            return req.session.save(() => res.redirect('/register'));
        }

        await user.register(false);

        req.flash('success', 'Usuário Cadastrado com Sucesso.');
        return req.session.save(() => res.redirect('/register'));
    } catch (e) {
        console.log('Não foi possível cadastrar o usuário: ', e);
        return res.render('404');
    }
}

exports.login = (req, res) => {
    res.render('login');
}

exports.loginUsuario = async (req, res) => {
    const user = new UserService(req.body);

    try {
        await user.login(true);

        if (user.errors.length > 0) {
            user.errors.forEach(erro => req.flash('error', erro));
            return req.session.save(() => res.redirect('/login'))
        }

        req.session.user = user.user;
        delete req.session.user.senha;

        return req.session.save(() => res.redirect('/perfilDoUsuario'));
    } catch (e) {
        console.log('Não foi possível logar o usuário: ', e);
        res.render('404');
    }
}

exports.perfilDoUsuario = async (req, res) => {
    const produtos = await ProdutosService.showProducts();
    res.render('loginUser', { produtos });
}

exports.logout = (req, res) => {
    req.session.destroy();
    res.locals.user = null;
    return res.redirect('/');
}