const express = require('express');
const router = require('express-promise-router')();
const user_documents_Controller = require('../controllers/user_documents.controller');
router.route('/')
    .get(user_documents_Controller.allUserDocuments)
    .get(user_documents_Controller.getUserDocumentsForUser)
    .post(user_documents_Controller.storeUserDocument);

router.route('/user/:user_id')
    .get(user_documents_Controller.getUserDocuments);

  

module.exports = router;