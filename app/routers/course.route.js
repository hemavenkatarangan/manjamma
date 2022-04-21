const express = require('express');
const router = require('express-promise-router')();
const coursesController = require('../controllers/course.controller.js');
const { validateParam, validateBody, schemas } = require('../helpers/routeHelpers');

router.route('/')
    .get(coursesController.allCourses)
    .post(coursesController.createCourse);

router.route('/:courseId/createdocuments')
    .post(coursesController.createCourseDocuments);


router.route('/:courseId')
    .get(validateParam(schemas.idSchema, ['courseId']), coursesController.getCourse)
    .patch(coursesController.updateCourse)
    .delete(validateParam(schemas.idSchema, ['courseId']), coursesController.removeCourse);

router.route('/:courseId/complete')
    .get(validateParam(schemas.idSchema, ['courseId']), coursesController.getCompleteCourseDetails);


module.exports = router;