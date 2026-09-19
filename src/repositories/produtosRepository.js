const ProdutosModel = require('../models/produtosModel');
const mongoose = require('mongoose');

class ProdutosRepository {
    static async createProduct(product) {
        return await ProdutosModel.create(product);
    }

    static async findProducts() {
        return await ProdutosModel.find().sort({ createdAt: 1 });
    }

    static async deleteProduct(id) {
        return await ProdutosModel.findByIdAndDelete(id);
    }

    static async updateProduct(produtoId, userId, product) {

        const pId = mongoose.Types.ObjectId.isValid(produtoId) ? new mongoose.Types.ObjectId(produtoId) : produtoId;
        const uId = mongoose.Types.ObjectId.isValid(userId) ? new mongoose.Types.ObjectId(userId) : userId;

        const produtoAtualizado = await ProdutosModel.findOneAndUpdate({ _id: pId, userId: uId }, product, { new: true });
    
        if (!produtoAtualizado) {
            console.log(`⚠️ Nenhum produto encontrado com ID: ${produtoId} para o Usuário: ${userId}`);
        }

        return produtoAtualizado;
    }

    static async findProductsById(id) {
        return await ProdutosModel.findById(id);
    }
}

module.exports = ProdutosRepository;