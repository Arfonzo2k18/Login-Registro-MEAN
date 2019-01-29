const mongoose = require('mongoose');
const Seccion = mongoose.model('seccion');

module.exports.createSection = (req, res, next) => {
    const seccion = new Seccion();
    seccion.idcurso = req.body.idcurso;
    seccion.nombre = req.body.nombre
    seccion.save((err, doc) => {
        if (!err){
            res.status(200).send(['Sección creada correctamente.']);
        } else {
            if (err.code == 12000)
                res.status(422).send(['Ya existe una sección con este nombre.']);
            else
                return next(err);
        }
    });
}

module.exports.getSectionsCourses = async (req, res, next) => {
    const { id } = req.params;
    const seccion = await Seccion.find({"idcurso": id});
    res.json(seccion);
};