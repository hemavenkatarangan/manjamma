const express = require('express');
const router = require('express-promise-router')();
const eventsController = require('../controllers/event.controller.js');

router.route('/')
    .get(eventsController.allEvents)
    .post(eventsController.createEvent);

router.route('/:eventId')
     .get(eventsController.getEvent)
     .put(eventsController.replaceEvent)
     .patch(eventsController.updateEvent)
     .delete(eventsController.removeEvent); 


module.exports = router;