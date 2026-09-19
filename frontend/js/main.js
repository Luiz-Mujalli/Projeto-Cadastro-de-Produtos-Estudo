import ModalEdit from './modules/modalEdit.js';
import ValidateLogin from './modules/loginValidate.js';

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM totalmente carregado!')

    const modal = new ModalEdit();
    modal.init();

    const validateLogin = new ValidateLogin('.formulario form');
    validateLogin.init();
})

