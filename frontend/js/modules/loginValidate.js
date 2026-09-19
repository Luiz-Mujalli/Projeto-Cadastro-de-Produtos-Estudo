
export default class ValidateLogin {
    constructor(formSelector = '.formulario form') {
        this.form = document.querySelector(formSelector)
    }

    init() {
        if (!this.form) {
            return;
        }

        this.form.addEventListener('submit', (e) => {
            this.handleSubmit(e);
        });
    }

    isEmail(email) {
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return regex.test(email);
        }

    handleSubmit(e) {
        this.limparErros();

        const emailInput = this.form.querySelector('input[name="email"]');
        const senhaInput = this.form.querySelector('input[name="senha"]');

        let erro = false;

        if (!emailInput || !isEmail(emailInput.value)) {
            this.mostraErro('E-mail ou Senha Incorretos.');
            erro = true;
        }

        if (!senhaInput || senhaInput.value.length < 8) {
            this.mostraErro('E-mail ou Senha Incorretos.');
            erro = true;
        }

        if (erro) {
            e.preventDefault();
        }
    }

    mostraErro(msg) {
        const titulo = document.querySelector('.titulo-login');
        if (titulo) {
            const msgHTML = `<p class="msg-erro">${msg}</p>`;
            titulo.insertAdjacentHTML('afterend', msgHTML);
        }
    }

    limparErros() {
        const errosAntigos = document.querySelectorAll('.msg-erro');
        errosAntigos.forEach(erro => erro.remove());
    }
}