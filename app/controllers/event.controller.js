const Event = require('../models/event.model.js');

module.exports = {

     allEvents: async (req, res, next) => {
        try {
            const events = await Event.find({});          
            res.status(200).json(events);
        }
        catch (err) {
            next(err);
        }

    },

    getEvent: async (req, res) => {
        const {eventId} = req.params;
        const event = await Event.findById(eventId);
        if (!event) {
            return res.status(404).send({
                message: "Event not found with id " + req.params.eventId
            });
        }
        res.status(200).json(event);
    },

    getCompleteEvent: async (req, res) => {
        const {eventId} = req.params;
        const event = await Event.findById(eventId).populate('courseType').populate('users');
        if (!event) {
            return res.status(404).send({
                message: "Event not found with id " + req.params.eventId
            });
        }
        res.status(200).json(event);
    },
    createEvent: async (req, res) => {
        const newEvent = new Event(req.body);
        const event = await newEvent.save();
        res.status(200).json(event);
    },

    updateEvent: async (req, res) => {
        const event = await Event.findByIdAndUpdate(req.params.eventId, req.body, { new: true });
        res.status(200).json(event);
    },

    replaceEvent: async (req, res) => {
        const {eventId} = req.params;
        const event = req.body;
        const resultEvent = await Event.findByIdAndUpdate(eventId, event, { new: true });
        res.status(200).json(resultEvent);
    },

    removeEvent: async (req, res) => {
        const event = await Event.findByIdAndRemove(req.params.eventId);
        if (!event) {
            return res.status(404).send({
                message: "Event not found with id " + req.params.eventId
            });
        }
        res.status(200).json({ message: 'deleted the event successfully', deletedEvent: event });
    }
};