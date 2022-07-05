const express = require('express');
const router = require('express-promise-router')();
const auditController = require('../controllers/audit.controller.js');
const { validateParam, validateBody, schemas } = require('../helpers/routeHelpers');

router.route('/')
    .get(auditController.allAudits)
    .post(auditController.createAudit);

router.route('/useraudit')
    .post(auditController.getAuditForUser);
    

module.exports = router;