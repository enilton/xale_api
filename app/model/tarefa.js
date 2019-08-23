const mongoose = require("mongoose");

const { Schema } = mongoose;

const TarefaSchema = new Schema({
  nome: {
    type: String,
    required: true,
    select: true
  },

  descricao: {
    type: String,
    required: true,
    select: true
  },

  hrInicio: {
    type: Date,
    required: false,
    select: true
  },

  dtCadastro: {
    type: Date,
    default: Date.now(),
    select: true
  },

  ativo: {
    type: Boolean,
    default: true,
    select: true
  },

  tags: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Tag"
    }
  ]
});

module.exports = mongoose.model("Tarefa", TarefaSchema);
