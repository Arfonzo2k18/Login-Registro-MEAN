// Constante que requiere el paquete de mongodb.
const mongoose = require('mongoose');

// Creamos una constante que será la encargada de crear la bdd.
const { Schema } = mongoose;

// Creamos las columnas que tendrá nuestra tabla usuario.
const EsquemaUsuarios = new Schema({
    nombre: {type: String, required: true },
    username: {type: String, required: true },
    email: {type: String, required: true},
    password: {type: String, required: true, minlength: 6}
});

// Exportamos el módulo para que podamos acceder desde el controlador de nuestra bdd.
module.exports = mongoose.model('Usuario', EsquemaUsuarios);