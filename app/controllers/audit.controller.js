const Audit = require('../models/audit.model.js');
const { getError } = require('../helpers/errorHelpers')


module.exports = {

    allAudits: async (req, res) => {
        try {


            const audits = await Audit.find({});
            let response = {};
            response.status_code = "200";
            response.status_message = "All audits";
            response.result = audits;
            res.status(200).json(response);
        }
        catch (err) {
            let response = {};
            let details = [];
            response.status_code = "400";
            response.status_message = "Error occured while finding the audits";
            details = getError(err.name, err.message);
            response.result = details;
            res.status(404).json(response);
        }

    },
    getAudit: async (req, res) => {
        const { user_id } = req.body;
        const audit = await Audit.find({user_id:user_id});
        let response = {};
        if (!audit) {

            response.status_code = "404";
            response.status_message = "Audit not found with id " + user_id;
            response.result = audit;
            return res.status(404).send(response);
        }

        response.status_code = "200";
        response.status_message = "All audits";
        response.result = audit;
        res.status(200).json(response);
    },

    getAuditForUser: async (req, res) => {
        const { user_id } = req.body;
        const audit = await Audit.find({ user_id: user_id });

        let response = {};

        if (!audit) {
            response.status_code = "404";
            response.status_message = "Audit nod found";
            response.result = audit;

            return res.status(404).send(response);
        }
        response.status_code = "200";
        response.status_message = "Audit found";
        response.result = audit;
        res.status(200).json(response);
    },

    createAudit: async (req, res) => {

        let response = {}

        try {



            const newAudit = new Audit(req.body);
            const audit = await newAudit.save();

            response.result = audit;
            response.status_code = "200";
            response.status_message = "Audit created";
            res.status(200).json(response);

        }

        catch (err) {
            response.result = null;
            response.status_code = "400";
            response.status_message = "Audit could not be created";
            res.status(200).json(response);
        }


    },


};