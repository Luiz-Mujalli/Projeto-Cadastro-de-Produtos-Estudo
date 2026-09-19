const ProdutosRepository = require('../repositories/produtosRepository');

class ProdutosService {
    constructor(body) {
        this.body = body;
        this.errors = [];
    }

    async editProduct(produtoId, userId) {
        if (!produtoId || !userId) return;

        this.body.userId = userId;
        this.validate();

        if (this.errors.length > 0) return;

        return await ProdutosRepository.updateProduct(produtoId, userId, this.body);
    }

    static async deleteProductById(id) {
        return await ProdutosRepository.deleteProduct(id);
    }

    static async showProducts() {
        return await ProdutosRepository.findProducts();
    }

    async registerProduct() {
        this.validate();

        if (this.errors.length > 0) return;

        await ProdutosRepository.createProduct(this.body);
    }

    validate() {
        this.cleanUp();

        if (!this.body.nome || this.body.nome.length < 3) {
            this.errors.push('Nome Inválido.');
        }

        const precoNum = Number(this.body.preco)
        if (isNaN(precoNum) || precoNum <= 0 || this.body.preco === '') {
            this.errors.push('Preço Inválido.');
        }

        if (!this.body.categoria || this.body.categoria.length === 0) {
            this.errors.push('Categoria Inválida.');
        }
    }

    cleanUp() {
        this.body = {
            nome: typeof this.body.nome === 'string' ? this.body.nome.trim() : '',
            preco: this.body.preco !== undefined && this.body.preco !== null ? String(this.body.preco).trim() : '',
            categoria: typeof this.body.categoria === 'string' ? this.body.categoria.trim() : '',
            userId: this.body.userId
        }
    }
}

module.exports = ProdutosService;