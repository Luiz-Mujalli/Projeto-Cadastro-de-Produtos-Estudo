const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    nome: { type: String, required: false },
    email: { type: String, required: true },
    senha: { type: String, required: true }
}, { timestamps: true });

const UserModel = mongoose.model('Usuários', UserSchema);

module.exports = UserModel;