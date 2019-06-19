const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EstadoSchema = new Schema ({

    nome: {
        type: String,
        required: true,
        select: true,
    },

    sigla: {
        type: String,
        required: true,
        select: true,
    },

    cidades: [{
        type: mongoose.Schema.ObjectId, ref: 'Cidade'
    }]
});

module.exports = mongoose.model('Estado',EstadoSchema);