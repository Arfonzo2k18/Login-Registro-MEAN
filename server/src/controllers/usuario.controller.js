const Usuario = require('../models/usuario');

//encriptar password
const bcrypt = require('bcryptjs');

//token jwt
const jwt = require('jsonwebtoken');

const usuarioControlador = {};

usuarioControlador.getUsuarios = async (req, res) => {
    // El await en este caso se encarga de esperar a que la bdd retorne un resultado de la consulta.
    // Una vez retorne un resultado la consulta, la funciÃ³n asÃ­ncrona puede continuar.
       const usuarios = await Usuario.find();
    
    // Muestra la respuesta en un json.
       res.json(usuarios);
};
    
// MÃ©todo para crear un usuario. (POST)
usuarioControlador.createUsuario = async (req, res) => {
    /**
     * params: req.body = Argumento que se encarga de introducir todos los datos especificados
     * en el constructor del objeto.
     * */
    const usuario = new Usuario({
        nombre: req.body.nombre,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });
    
    // El await en este caso se encarga de esperar a que la base de datos haya introducido el nuevo empleado.
        await usuario.save();
    
    // Mensaje en un json.
        res.json({
           'status': 'Usuario creado correctamente.' 
        });
    };

//login
usuarioControlador.login = async (req, res) => {

    let body = req.body;

    //comprueba que hay email y password
    if( !body.email || !body.password ){
        return res.status(400.6).json({
            ok: false,
            err: 'Faltan los campos email o password'
        });
    }

    //busca el email recibido en la base de datos
    usuarioControlador.findOne({ email: body.email, state: true }, (err, usuarioDB) => {

        if(err){
            return res.status(500).json({
                ok: false,
                err
            });
        }

        if(!usuarioDB){
            return res.status(400).json({
                ok: false,
                err: 'Email incorrecto'
            });
        }

        //si llegamos aqui, el email es correcto
        //comparar password enviada+hash con la password de la bdd
        if(!bcrypt.compareSync(body.password, usuarioDB.password)){
            //si entra aquí, la contraseña es incorrecta
            return res.status(400).json({
                ok: false,
                err: 'Contraseña incorrecta'
            });
        }

        //al llegar aquí, el usuario es correcto, se le retorna el ok y el token

        let token = jwt.sign({
            usuario: usuarioDB //payload
        }, process.env.SEED, //firma
            {expiresIn: process.env.CADUCIDAD_TOKEN} //caducidad
        );

        return res.status(202).json({
            ok: true,
            usuario: usuarioDB,
            token
        });
    });
}

module.exports = usuarioControlador;