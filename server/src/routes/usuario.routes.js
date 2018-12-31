const router = require('express').Router();

const usuario = require('../controllers/usuario.controller');

// Devuelve todos los usuarios
router.get('/', usuario.getUsuarios);

// Comprueba las credenciales para hacer loggin
router.post('/login', usuario.login);

// Crea un usuario
router.post('/', usuario.createUsuario);

module.exports = router;