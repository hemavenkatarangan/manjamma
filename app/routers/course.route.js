const express = require('express');
const router = require('express-promise-router')();
const coursesController = require('../controllers/course.controller.js');
const { validateParam, validateBody, schemas } = require('../helpers/routeHelpers');

router.route('/')
    .get(coursesController.allCourses)
    .post([validateBody(schemas.courseSchema)], coursesController.createCourse);

router.route('/create')
    .post(coursesController.createFullCourse);


router.route('/:courseId')
    .get(validateParam(schemas.idSchema, ['courseId']), coursesController.getCourse)
    .put([validateParam(schemas.idSchema, ['courseId']), validateBody(schemas.courseSchema)], coursesController.replaceCourse)
    .patch([validateParam(schemas.idSchema, ['courseId']), validateBody(schemas.courseOptionalSchema)], coursesController.updateCourse)
    .delete(validateParam(schemas.idSchema, ['courseId']), coursesController.removeCourse);

router.route('/:courseId/complete')
    .get(validateParam(schemas.idSchema, ['courseId']), coursesController.getCompleteCourseDetails);

router.route('/:courseId/questions')
    .get(validateParam(schemas.idSchema, ['courseId']), coursesController.getCourseQuestions)
    .post([validateParam(schemas.idSchema, ['courseId']), validateBody(schemas.qAAdminSchema)], coursesController.createCourseQuestion);

router.route('/:courseId/questions/:questionId')
    .get(validateParam(schemas.idSchema, ['courseId', 'questionId']), coursesController.getCourseQuestion)
    .put([validateParam(schemas.idSchema, ['courseId', 'questionId']), validateBody(schemas.qAAdminSchema)], coursesController.replaceCourseQuestion)
    .patch([validateParam(schemas.idSchema, ['courseId', 'questionId']), validateBody(schemas.qAAdminOptionalSchema)], coursesController.updateCourseQuestion)
    .delete([validateParam(schemas.idSchema, ['courseId', 'questionId'])], coursesController.removeCourseQuestion);

router.route('/:courseId/questions/:questionId/complete')
    .get(validateParam(schemas.idSchema, ['courseId', 'questionId']), coursesController.getCompleteCourseQuestion);

router.route('/:courseId/additionalproperties')
    .get(validateParam(schemas.idSchema, ['courseId']), coursesController.getCourseAdditionalProperties)
    .post([validateParam(schemas.idSchema, ['courseId']), validateBody(schemas.additionalPropertySchema)], coursesController.createCourseAdditionalProperty);

router.route('/:courseId/additionalproperties/:additionalPropertyId')
    .get(validateParam(schemas.idSchema, ['courseId', 'additionalPropertyId']), coursesController.getCourseAdditionalProperty)
    .put([validateParam(schemas.idSchema, ['courseId', 'additionalPropertyId']), validateBody(schemas.additionalPropertySchema)], coursesController.replaceCourseAdditionalProperty)
    .patch([validateParam(schemas.idSchema, ['courseId', 'additionalPropertyId']), validateBody(schemas.additionalPropertyOptionalSchema)], coursesController.updateCourseAdditionalProperty)
    .delete([validateParam(schemas.idSchema, ['courseId', 'additionalPropertyId'])], coursesController.removeCourseAdditionalProperty);

router.route('/:courseId/additionalproperties/:additionalPropertyId/complete')
    .get(validateParam(schemas.idSchema, ['courseId', 'additionalPropertyId']), coursesController.getCourseAdditionalProperty)


module.exports = router;