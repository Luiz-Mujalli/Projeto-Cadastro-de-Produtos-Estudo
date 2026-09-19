export default class ModalEdit {
    init() {
        const botoesEditar = document.querySelectorAll('.btn-abrir-modal');

        botoesEditar.forEach(botao => {
            botao.addEventListener('click', (e) => {
                e.preventDefault();
                this.abrirModal(botao);
            });
        });

        const botaoCancelar = document.querySelector('.btn-cancelar');
        if (botaoCancelar) {
            botaoCancelar.addEventListener('click', () => this.fecharModal());
        }
    }

    abrirModal(botao) {
        const id = botao.getAttribute('data-id');
        const nome = botao.getAttribute('data-nome');
        const preco = botao.getAttribute('data-preco');
        const categoria = botao.getAttribute('data-categoria');
        
        document.getElementById('modalNome').value = nome;
        document.getElementById('modalPreco').value = preco;
        document.getElementById('modalCategoria').value = categoria;
    
        document.getElementById('formEditar').action = `/perfilDoUsuario/edit/${id}`;
    
        document.getElementById('modalEditar').classList.add('active');
    }
    
    fecharModal() {
        document.getElementById('modalEditar').classList.remove('active');
    }
}
