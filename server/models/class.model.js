const mongoose = require('mongoose');

var classSchema = new mongoose.Schema({
    idseccion: {
        type: String,
        required: 'La clase tiene que estar dentro de una sección'
    },
    nombre: {
        type: String,
        required: 'La clase debe tener un nombre'
    },
    duracion: {
        type: Number,
        required: 'La clase debe tener una duración'
    },
    video: {
        type: String,
        required: 'La clase debe tener un video'
    },
    explicacion: {
        type: String,
        required: 'La clase debe tener explicacion'
    }
});

mongoose.model('clase', classSchema);