const express = require('express');
const router = express.Router();

const ctrlUser = require('../controllers/user.controller');
const ctrlCourse = require('../controllers/course.controller');
const ctrlSection = require('../controllers/section.controller');
const ctrlClass = require ('../controllers/class.controller');

// Rutas usuarios.
router.post('/register', ctrlUser.register);
router.post('/authenticate', ctrlUser.authenticate);
router.get('/userProfile/:id', ctrlUser.getUserProfile);

// Rutas cursos.
router.post('/createCourse', ctrlCourse.createCourse);
router.get('/allCourses', ctrlCourse.allCourses);
router.get('/getCourseDetails/:id', ctrlCourse.getCourseDetails);
router.put('/editCourse/:id', ctrlCourse.editCourse);

// Rutas secciones.
router.post('/createSection', ctrlSection.createSection);
router.get('/getSectionsCourses/:id', ctrlSection.getSectionsCourses);

// Rutas clases.
router.post('/createClass', ctrlClass.createClass);
router.get('/getClassCourses/:id', ctrlClass.getClassCourses);

module.exports = router;