const mongoose = require('mongoose');

var courseSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: 'El nombre no puede estar vacío'
    },
    descripcion: {
        type: String,
        required: 'La descripción del curso no puede estar vacía'
    },
    categoria: {
        type: String,
        required: 'El curso debe tener una categoría'
    },
    tecnologia: {
        type: String,
        required: 'El curso debe ser de una tecnología'
    },
    horas: {
        type: Number,
        required: 'El curso debe tener una duración'
    },
    precio: {
        type: Number,
        required: 'El curso debe tener un precio'
    },
    imagen: {
        type: String,
        required: 'El curso debe tener una imagen',
        default: '/static/prueba.png'
    }
});

mongoose.model('curso', courseSchema);