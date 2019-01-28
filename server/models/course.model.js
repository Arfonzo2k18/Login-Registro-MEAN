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
    },
    autor: { 
        type: String, 
        required: 'El curso debe tener un autor' 
    },
    requisitos: {
        type: String,
        required: 'Los requisitos no pueden estar vacíos'
    },
    aprendizaje: {
        type: String,
        required: 'Algo tienes que aprender con el curso'
    },
    fecha: {
        type: Date,
        required: 'El curso debe tener una fecha de creacion',
        default: new Date()
    }
});

mongoose.model('curso', courseSchema);