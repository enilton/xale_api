const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const TagSchema = new Schema ({

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

    dtCadastro:{
        type: Date,        
        default: Date.now(),
        select: true,
    },
    
    ativo: {
        type: Boolean,
        default: true,
        select: true,
    },

    tpTag: {
        type: mongoose.Schema.ObjectId, ref: 'TipoTag',
    },
});

module.exports = mongoose.model('Tag',TagSchema);