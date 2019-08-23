const mongoose = require("mongoose");

const { Schema } = mongoose;

const UsuarioSchema = new Schema({
  idFirebase: {
    type: String,
    required: true,
    select: true
  },

  nome: {
    type: String,
    required: true,
    select: true
  },

  dtNascimento: {
    type: Date,
    required: true,
    select: true
  },

  dtCadastro: {
    type: Date,
    default: Date.now(),
    select: true
  },

  idFotoPerfil: {
    type: String,
    select: true
  },

  fotoPerfil: {
    type: Object,
    select: true
  },

  cidade: {
    type: Number,
    select: true
  },

  tarefas: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Tarefa"
    }
  ],

  ativo: {
    type: Boolean,
    default: true,
    select: true
  },

  historicoAtualizacao: {
    type: mongoose.Schema.ObjectId,
    ref: "HistoricoUsuario"
  }
});

module.exports = mongoose.model("Usuario", UsuarioSchema);
