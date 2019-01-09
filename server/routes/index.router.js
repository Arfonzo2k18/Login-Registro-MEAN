const express = require('express');
const router = express.Router();

const ctrlUser = require('../controllers/user.controller');
const ctrlCourse = require('../controllers/course.controller');

// Rutas usuarios.
router.post('/register', ctrlUser.register);
router.post('/authenticate', ctrlUser.authenticate);
router.get('/userProfile/:id', ctrlUser.getUserProfile);

// Rutas cursos.
router.post('/createCourse', ctrlCourse.createCourse);
router.get('/allCourses', ctrlCourse.allCourses);
router.put('/editCourse/:id', ctrlCourse.editCourse);

module.exports = router;