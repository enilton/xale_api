const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CidadeSchema = new Schema ({

    nome: {
        type: String,
        required: true,
        select: true,
    },

    estado : {
        type: mongoose.Schema.ObjectId, ref: 'Estado'
    }
});

module.exports = mongoose.model('Cidade',CidadeSchema);