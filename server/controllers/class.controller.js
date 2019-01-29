const mongoose = require('mongoose');
const Clase = mongoose.model('clase');

module.exports.createClass = (req, res, next) => {
    const clase = new Clase();
    clase.idseccion = req.body.idseccion;
    clase.nombre = req.body.nombre;
    clase.duracion = req.body.duracion;
    clase.video = req.body.video;
    clase.explicacion = req.body.explicacion;
    clase.save((err, doc) => {
        if (!err){
            res.status(200).send(['Clase creada correctamente.']);
        } else {
            if (err.code == 12000)
                res.status(422).send(['Esta clase ya existe.']);
            else
                return next(err);
        }
    });
}

module.exports.getClassCourses = async (req, res, next) => {
    const { id } = req.params;
    const clase = await Clase.find({"idseccion": id});
    res.json(clase);
};