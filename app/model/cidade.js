const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CidadeSchema = new Schema ({

    nome: {
        type: String,
        required: true,
        select: true,
    },

    createdAt: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('Cidade',CidadeSchema);