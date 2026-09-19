const mongoose = require('mongoose');

const ProdutoSchema = mongoose.Schema({
    nome: { type: String, required: true },
    preco: { type: Number, required: true },
    categoria: { type: String, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId,
        ref: 'usuários',
        required: true
     }
}, { timestamps: true });

const ProdutosModel = mongoose.model('Produtos', ProdutoSchema);

module.exports = ProdutosModel;