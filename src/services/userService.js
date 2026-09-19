const UserRepository = require('../repositories/userRepository');
const validator = require('validator');
const bcryptjs = require('bcryptjs');

class UserService {
    constructor(body) {
        this.body = body;
        this.errors = [];
        this.user = null;
    }

    async login(isLogin) {
        this.validate(isLogin);

        if (this.errors.length > 0) return;

        this.user = await UserRepository.userExists(this.body.email);
        if (!this.user) {
            this.errors.push('E-mail ou Senha Incorretos.');
            return;
        }

        if (!bcryptjs.compareSync(this.body.senha, this.user.senha)) {
            this.errors.push('E-mail ou Senha Incorretos.');
            this.user = null;
            return;
        }
    }

    async register(isLogin) {
        this.validate(isLogin);

        if (this.errors.length > 0) return;

        const salt = bcryptjs.genSaltSync();
        this.body.senha = bcryptjs.hashSync(this.body.senha, salt);

        await UserRepository.createUser(this.body);
    }

    validate(isLogin) {
        this.cleanUp(isLogin);

        if (!this.body.nome && !isLogin) {
            this.errors.push('Nome Inválido.');
        }

        if (!validator.isEmail(this.body.email) && !isLogin) {
            this.errors.push('E-mail Inválido.');
        }

        if (!this.body.senha && !isLogin || this.body.senha.length < 8 && !isLogin) {
            this.errors.push('A senha deve ter entre 8 e 50 caracteres.');
        }
    } 

    cleanUp(isLogin) {
        this.body = {
            nome: isLogin ? '' : (typeof this.body.nome === 'string' ? this.body.nome.trim() : ''),
            email: typeof this.body.email === 'string' ? this.body.email.trim() : '',
            senha: typeof this.body.senha === 'string' ? this.body.senha : ''
        };
    }
}

module.exports = UserService;


