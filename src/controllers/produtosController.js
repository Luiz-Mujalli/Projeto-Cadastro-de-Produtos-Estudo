const ProdutosService = require('../services/produtosService');

exports.cadastraProduto = async (req, res) => {
    req.body.userId = req.session.user._id;
    const produto = new ProdutosService(req.body);

    try {
        await produto.registerProduct();

        if (produto.errors.length > 0) {
            produto.errors.forEach(erro => req.flash('error', erro));
            return req.session.save(() => res.redirect('/perfilDoUsuario'));
        }

        req.flash('success', 'Produto Cadastrado com Sucesso.');
        return req.session.save(() => res.redirect('/perfilDoUsuario'));
    } catch (e) {
        console.log('Não foi possível cadastrar o produto:', e);
        res.render('404');
    }
}

exports.deletaProduto = async (req, res) => {
    try {
        await ProdutosService.deleteProductById(req.params.id);

        req.flash('success', 'Produto Excluído com Sucesso.')
        req.session.save(() => res.redirect('/perfilDoUsuario'));
    } catch (e) {
        console.log('Não foi possível deletar o produto: ', e);
        res.render('404');
    }
}

exports.editaProduto = async (req, res) => {
    const produto = new ProdutosService(req.body);

    try {
        const produtoId = req.params.id;
        const userId = req.session.user._id;

        await produto.editProduct(produtoId, userId);

        if (produto.errors.length > 0) {
            produto.errors.forEach(erro => req.flash('error', erro));
            return req.session.save(() => res.redirect('/perfilDoUsuario'));
        }

        req.flash('success', 'Produto Editado com Sucesso.');
        return req.session.save(() => res.redirect('/perfilDoUsuario'));
    } catch (e) {
        console.log('Não foi possível editar o produto: ', e);
        res.render('404');
    }
}