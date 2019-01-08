const mongoose = require('mongoose');
const fs = require('fs-extra');
const path = require('path');
const { randomNumber } = require('../helpers/libs');

const Curso = mongoose.model('curso');

// Método para crear un curso.
module.exports.createCourse = (req, res, next) => {
    const course = new Curso();
    course.nombre = req.body.nombre;
    course.descripcion = req.body.descripcion;
    course.categoria = req.body.categoria;
    course.tecnologia = req.body.tecnologia;
    course.horas = req.body.horas;
    course.precio = req.body.precio;
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

// Método para modificar un curso según su ID.
module.exports.editCourse = async (req, res, next) => {
    const course = {
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        categoria: req.body.categoria,
        tecnologia: req.body.tecnologia,
        horas: req.body.horas,
        precio: req.body.precio,
        imagen: req.body.imagen
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
        // Localización de la imagen
        const imageTempPath = req.file.path;
        const ext = path.extname(req.file.originalname).toLowerCase();
        const targetPath = path.resolve(`/static${imgUrl}${ext}`);
  
        // Validar extensión
        if (ext === '.png' || ext === '.jpg' || ext === '.jpeg' || ext === '.gif') {
          // Necesitas la ruta de la carpeta "temp" o dará error.
          await fs.rename(imageTempPath, targetPath);
        } else {
          await fs.unlink(imageTempPath);
          res.status(500).json({ error: 'Solo se permiten imágenes' });
        }
      }
    };
  
    saveImage();
  };