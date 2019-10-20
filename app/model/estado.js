const mongoose = require("mongoose");

const { Schema } = mongoose;

const EstadoSchema = new Schema({
  nome: {
    type: String,
    required: true,
    select: true
  },

  sigla: {
    type: String,
    required: true,
    select: true
  }
});

module.exports = mongoose.model("Estado", EstadoSchema);
