const mongoose = require('mongoose');

var sectionSchema = new mongoose.Schema({
    idcurso: {
        type: String,
        required: 'La sección tiene que estar dentro de un curso'
    },
    nombre: {
        type: String,
        required: 'La sección debe tener un nombre'
    }
});

mongoose.model('seccion', sectionSchema);