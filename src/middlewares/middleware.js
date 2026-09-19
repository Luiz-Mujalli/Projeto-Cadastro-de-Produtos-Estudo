exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
}

exports.checkCsrfError = (err, req, res, next) => {
    if (err && 'EBADCSRFTOKEN' === err.code) {
        return res.render('404');
    }

    if (err) {
        return res.render('404');
    }

    next();
}

exports.flashMessages = (req, res, next) => {
    res.locals.error = req.flash('error');
    res.locals.success = req.flash('success');
    next();
}

exports.infoUserLogged = (req, res, next) => {
    res.locals.user = req.session.user;
    next();
}

exports.checkUserLogged = (req, res, next) => {
    if (!res.locals.user) {
        req.flash('error', 'Você precisa estar logado para acessar esta página.');
        return req.session.save(() => res.redirect('/login'));
    } 

    next();
}

