const express = require('express');
const router = express.Router();

const ctrlUser = require('../controllers/user.controller');
const ctrlCourse = require('../controllers/course.controller');

const jwtHelper = require('../config/jwtHelper');

router.post('/register', ctrlUser.register);
router.post('/authenticate', ctrlUser.authenticate);
router.get('/userProfile/:id', jwtHelper.verifyJwtToken, ctrlUser.userProfile);
router.post('/createCourse', ctrlCourse.createCourse);
router.get('/allCourses', ctrlCourse.allCourses);
router.put('/editCourse/:id', ctrlCourse.editCourse);

module.exports = router;