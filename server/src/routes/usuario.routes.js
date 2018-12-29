const router = require('express').Router();

const usuario = require('../controllers/usuario.controller');

// Devuelve todos los usuarios
router.get('/', usuario.getUsuarios);

// Devuelve un usuario específico
router.get('/:email', usuario.getUsuario);

// Crea un usuario
router.post('/', usuario.createUsuario);

module.exports = router;