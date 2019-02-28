const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');
const fs = require("fs");
const random = require('../helpers/libs');

const Usuario = mongoose.model('usuario');

// Método para registrar un usuario.
module.exports.register = (req, res, next) => {
    var user = new Usuario();
    user.nombre = req.body.nombre;
    user.username = req.body.username;
    user.email = req.body.email;
    user.password = req.body.password;

   /* if(req.body.foto != "") {
        var imagen = req.body.foto;
        imagen = imagen.replace("\n","");
        var nombrearchivo = random.randomNumber() + ".jpg";
        fs.writeFile(nombrearchivo, imagen, 'base64', function(err) {
            if(err) {
                console.log(err);
            }
        });

        user.imagen = '/static/' + nombrearchivo;*/
        user.save((err, doc) => {
            if (!err)
                res.send(doc);
            else {
                if (err.code == 11000)
                    res.status(422).send(['Dirección de email duplicada.']);
                else
                    return next(err);
            }
        });
}
// Método para autenticar un usuario.
module.exports.authenticate = (req, res, next) => {
    // Llama a la autenticación de passport.
    passport.authenticate('local', (err, user, info) => {       
        // Error por parte del middleware de passport.
        if (err) return res.status(400).json(err);
        // Usuario registrado.
        else if (user) return res.status(200).json({ "token": user.generateJwt(), "idusuario": user.id });
        // Usuario desconocido o contraseña errónea.
        else return res.status(404).json(info);
    })(req, res);
}

module.exports.getUserProfile = async (req, res, next) => {
    const { id } = req.params;
    const usuario = await Usuario.findById(id);  
    res.status(200).json(usuario);
};

/*
    user.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            if (err.code == 11000)
                res.status(422).send(['Dirección de email duplicada.']);
            else
                return next(err);
        }
    });
*/