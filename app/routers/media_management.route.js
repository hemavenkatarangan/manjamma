const express = require('express');
const router = require('express-promise-router')();
const media_Controller = require('../controllers/media.controller');
const { validateParam, validateBody, schemas } = require('../helpers/routeHelpers');

router.route('/')
    .get(media_Controller.allMedia)
    .post(media_Controller.createMedia);


router.route('/media')
    .post(media_Controller.getMedia);
    

module.exports = router;