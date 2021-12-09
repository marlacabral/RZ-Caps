const mongoose = require('mongoose');

const capModel = new mongoose.Schema({
    titulo:{ type: String, required: true },
    descricao:{ type: String, required: true },
    valor: { type: Number, required: true },
    imagem: { type: String, required: true },
    dataCriacao: { type: Date, default: Date.now}
})

const ColCaps = mongoose.model("caps", capModel);

module.exports = ColCaps;