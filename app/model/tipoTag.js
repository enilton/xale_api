const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const TipoTagSchema = new Schema ({

    nome: {
        type: String,
        required: true,
        select: true,
    },

    descricao: {
        type: String,
        required: true,
        select: true,
    },

    dtCadastro: {
        type: Date,        
        default: Date.now(),
        select: true,
    }, 

    ativo: {
        type: Boolean,
        default: true,
        select: true,
    }

});

module.exports = mongoose.model('TipoTag',TipoTagSchema);