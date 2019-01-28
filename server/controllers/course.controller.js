const mongoose = require('mongoose');
const fs = require('fs-extra');
const path = require('path');
const { randomNumber } = require('../helpers/libs');

const Curso = mongoose.model('curso');
const Usuario = mongoose.model('usuario');

// Método para crear un curso.
module.exports.createCourse = (req, res, next) => {
    const course = new Curso();
    course.nombre = req.body.nombre;
    course.descripcion = req.body.descripcion;
    course.categoria = req.body.categoria;
    course.tecnologia = req.body.tecnologia;
    course.horas = req.body.horas;
    course.precio = req.body.precio;
    course.imagen = req.body.imagen;
    course.autor = req.body.autor;
    course.requisitos = req.body.requisitos;
    course.aprendizaje = req.body.aprendizaje;
    course.save((err, doc) => {
        if (!err){
            res.status(200).send(['Curso creado correctamente.']);
        } else {
            if (err.code == 12000)
                res.status(422).send(['Ya existe un curso con este nombre.']);
            else
                return next(err);
        }
    });
}

// Método para traer todos los cursos existentes.
module.exports.allCourses = async (req, res, next) => {
    const courses = await Curso.find();
    res.json(courses);
};

// Método para recoger un curso.
module.exports.getCourseDetails = async (req, res, next) => {
    const { id } = req.params;
    course = await Curso.findById(id);
    const creador = await Usuario.findById(course.autor);
    course.autor = creador.nombre;
    res.json(course);
};

// Método para modificar un curso según su ID.
module.exports.editCourse = async (req, res, next) => {
    const course = {
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        categoria: req.body.categoria,
        tecnologia: req.body.tecnologia,
        horas: req.body.horas,
        precio: req.body.precio,
        imagen: req.body.imagen,
        autor: req.body.autor,
        requisitos: req.body.requisitos,
        aprendizaje: req.body.aprendizaje
    };
    await Curso.findByIdAndUpdate(req.params.id, {$set: course}, {upsert: false}, (err, result) => {
        if (err) return res.send('El usuario que has introducido no existe.')
        res.status(200).send(['Curso actualizado correctamente.']);
    });
};

// Método para asignar imagenes.
seleccionarimagencreate = (req, res) => {
    const saveImage = async () => {
      const imgUrl = randomNumber();
      const images = await Curso.find({ imagen: imgUrl });
      if (images.length > 0) {
        saveImage()
      } else {
        // Localización de la imagen.
        const imageTempPath = req.file.path;
        const ext = path.extname(req.file.originalname).toLowerCase();
        const targetPath = path.resolve(`/static${imgUrl}${ext}`);
  
        // Validar extensión.
        if (ext === '.png' || ext === '.jpg' || ext === '.jpeg' || ext === '.gif') {
          // Necesitas la ruta de la carpeta "static" o dará error.
          await fs.rename(imageTempPath, targetPath);
        } else {
          await fs.unlink(imageTempPath);
          res.status(500).json({ error: 'Solo se permiten imágenes' });
        }
      }
    };
  
    saveImage();
  };