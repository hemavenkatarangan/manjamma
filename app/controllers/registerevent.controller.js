const RegisterEvent = require('../models/RegisterEvent.model.js');
const QAUser = require('../models/qa.model');
const User = require('../models/user.model.js');
const Event = require('../models/event.model.js');
const {validateEventRegistration} = require('../helpers/validateHelpers');


module.exports = {

    allowRegistration: async (req, res) => {
        const {userId} = req.params;
        const {eventId } = req.params;
        const user = await User.findById(userId);
        const event =  await Event.findById(eventId);
        const validateUserEvent = validateEventRegistration (user, event);       
        res.status(200).json(validateUserEvent);
    },

    validateUserInput : async (req, res) => {
        const {userId} = req.params;
        const {eventId } = req.params;
        const {qa} = req.body;

        const event = await Event.findById(eventId)

        const newRegisterEvent = new RegisterEvent({ event: eventId, user: userId , status : 'New'});
        let registerEvent = await newRegisterEvent.save();

        if (qa) {
            const qas = qa.map(function (element) {
                console.log(element);
                let newQA = new QAUser(element);
                newQA.event = eventId;
                return newQA;

            });
            const qs = await Promise.all(qas.map(qa=>qa.save()));
            console.log(qs);
            registerEvent.qas = qs;
            registerEvent = await registerEvent.save();      
         
        }

        const fullRegisterEvent = await RegisterEvent.findById(registerEvent._id).populate({
            path: 'qas',
            populate: {
                path: 'question'
            }
        });  

        const validateUserEvent = validateEventRegistration (user, event);       
        res.status(200).json(validateUserEvent);
    },

     allRegisterEvents: async (req, res, next) => {
        try {
            const RegisterEvents = await RegisterEvent.find({});          
            res.status(200).json(RegisterEvents);
        }
        catch (err) {
            next(err);
        }

    },

    getRegisterEvent: async (req, res) => {
        const {RegisterEventId} = req.params;
        const RegisterEvent = await RegisterEvent.findById(RegisterEventId);
        if (!RegisterEvent) {
            return res.status(404).send({
                message: "RegisterEvent not found with id " + req.params.RegisterEventId
            });
        }
        res.status(200).json(RegisterEvent);
    },

    getCompleteRegisterEvent: async (req, res) => {
        const {RegisterEventId} = req.params;
        const RegisterEvent = await RegisterEvent.findById(RegisterEventId).populate('courseType').populate('users');
        if (!RegisterEvent) {
            return res.status(404).send({
                message: "RegisterEvent not found with id " + req.params.RegisterEventId
            });
        }
        res.status(200).json(RegisterEvent);
    },


    updateRegisterEvent: async (req, res) => {
        const RegisterEvent = await RegisterEvent.findByIdAndUpdate(req.params.RegisterEventId, req.body, { new: true });
        res.status(200).json(RegisterEvent);
    },

    replaceRegisterEvent: async (req, res) => {
        const {RegisterEventId} = req.params;
        const RegisterEvent = req.body;
        const resultRegisterEvent = await RegisterEvent.findByIdAndUpdate(RegisterEventId, RegisterEvent, { new: true });
        res.status(200).json(resultRegisterEvent);
    },

    removeRegisterEvent: async (req, res) => {
        const RegisterEvent = await RegisterEvent.findByIdAndRemove(req.params.RegisterEventId);
        if (!RegisterEvent) {
            return res.status(404).send({
                message: "RegisterEvent not found with id " + req.params.RegisterEventId
            });
        }
        res.status(200).json({ message: 'deleted the RegisterEvent successfully', deletedRegisterEvent: RegisterEvent });
    }
};