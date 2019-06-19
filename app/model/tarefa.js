const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const TarefaSchema = new Schema ({

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

    hrInicio: {
        type: Date,
        required: false,
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

    usuarios: [{
        type: mongoose.Schema.ObjectId, ref: 'Usuario'
    }],

    tags : [{
        type: mongoose.Schema.ObjectId, ref: 'Tag'
    }],

});

module.exports = mongoose.model('Tarefa',TarefaSchema);