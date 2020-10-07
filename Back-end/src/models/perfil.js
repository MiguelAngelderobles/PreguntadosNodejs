const mongoose = require('mongoose');

const Perfil = mongoose.Schema({
  nombre: { 
  	type: String, 
  	required: '{PATH} is required!'
  },
  puntuacion: {
    type: String,
    required: '{PATH} is required!'
  },
  status: {
    type: Boolean,
    default: false
  }});


module.exports = mongoose.model('perfil', Perfil);