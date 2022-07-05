const express = require('express');
const router = require('express-promise-router')();
const roleController = require('../controllers/role.controller.js');
const { validateParam, validateBody, schemas } = require('../helpers/routeHelpers');

router.route('/')
    .get(roleController.allRoles)
    .post(roleController.createRole);




router.route('/:roleId')
    .get(roleController.getRole);
    

module.exports = router;