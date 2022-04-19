const express = require('express');
const router = require('express-promise-router')();
const user_roleController = require('../controllers/user_role.controller.js');
const { validateParam, validateBody, schemas } = require('../helpers/routeHelpers');

router.route('/')
    .get(user_roleController.allUserRoles)
    .post(user_roleController.createUserRole);


router.route('/userrole')
    .post(user_roleController.getUserRole);
    

module.exports = router;