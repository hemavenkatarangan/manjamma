const express = require('express');
const router = require('express-promise-router')();
const carosalController = require('../controllers/carosal.controller ');

router.route('/')
    .get(carosalController.allCarosals)
    .post(carosalController.createCarosal);

router.route('/:carosalId')
     .get(carosalController.getCarosal)
     .put(carosalController.replaceCarosal)
     .patch(carosalController.updateCarosal)
     .delete(carosalController.removeCarosal); 
 
     

module.exports = router;