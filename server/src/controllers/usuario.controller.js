const Usuario = require('../models/usuario');

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

    // MÃ©todo para buscar un empleado por ID. (GET)
usuarioControlador.getUsuario = async (req, res) => {
    try {
    // El await en este caso se encarga de esperar a que la base de datos haya encontrado un empleado por id.
    // Dicho id estÃ¡ especificado en la URL de nuestro navegador. Por ejemplo si buscamos al empleado con id 1,
    // nuestra url serÃ­a http://localhost:3000/api/empleado/1
    const usuario = await Usuario.findById(req.params.email);

    // Si lo encuentra manda un código de respuesta 200.
    res.status(200).json({
        Success: true,
        Usuario: usuario,
        email: email
    })
    // Si falla manda un mensaje de error y un código de respuesta 400.
    } catch(error){
        return res.status(404).json({
            Success: false,
            errors: {
                error: error,
                message: `No se ha encontrado ningun usuario con el Email ` + req.params.email
            }
        })
    }
};

module.exports = usuarioControlador;
    