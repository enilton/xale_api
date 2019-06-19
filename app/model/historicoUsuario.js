const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HistoricoUsuarioSchema = new Schema ({

    descricao: {
        type: String,
        required: true,
        select: true,
    },

    dtAlteracao : {
        type: Date,
        required: true,
        select: true,
    },

    usuario : {
        type: mongoose.Schema.ObjectId, ref: 'Usuario'
    }
});

module.exports = mongoose.model('HistoricoUsuario',HistoricoUsuarioSchema);