const Program = require('../models/program.model.js');
const errorDetail = require('../helpers/errorHelpers');
let response = {};

module.exports = {

    allPrograms: async (req, res, next) => {
        try {
            const programs = await Program.find({});
            response.status_code = "200";
            response.status_message = "All Programs";
            response.result = programs;
            res.status(200).json(response);
        }
        catch (err) {
            response.status_code = "404";
            response.status_message = "No Programs found";
            response.result = null;
            response.error = errorDetail.getErrorDetail(err.name, err.code + "-->" + err.message);

            res.status(200).json(response);
        }

    },

    getProgram: async (req, res) => {
        const { programId } = req.params;
        const program = await Program.findById(programId);
        if (!program) {
            response.status_code = "404";
            response.status_message = "Program not found";
            response.result = null;
            return res.status(404).send(response);
        }

        response.status_code = "200";
        response.status_message = "Program found";
        response.result = program;
        res.status(200).json(response);
    },

    getProgramByCourse: async (req, res) => {
        const { courseId } = req.params;
        const program = await Program.find({ course: courseId });
        if (!program) {

            response.status_code = "404";
            response.status_message = "Program not found";
            response.result = null;
            return res.status(404).send(response);
        }

        response.status_code = "200";
        response.status_message = "Program found";
        response.result = program;
        res.status(200).json(response);
    },

    getCompleteProgram: async (req, res) => {
        const { programId } = req.params;
        const program = await Program.findById(programId).populate('course');
        if (!program) {
            response.status_code = "404";
            response.status_message = "Program not found";
            response.result = null;
            return res.status(404).send(response);
        }
        response.status_code = "200";
        response.status_message = "Program found";
        response.result = program;
        res.status(200).json(response);
    },


    createProgram: async (req, res) => {

        try {

            const newProgram = new Program(req.body);
            const program = await newProgram.save();

            response.status_code = "200";
            response.status_message = "Program Created";
            response.result = program;
            res.status(200).json(response);

        }

        catch (err) {

            response.status_code = "403";
            response.errorObj = err;
            response.status_message = "Program could not be created";
            response.result = null;
            res.status(403).json(response);

        }


    },

    updateProgram: async (req, res) => {

        try {
            const program = await Program.findByIdAndUpdate(req.params.programId, req.body, { new: true });
            if (program) {
                response.status_code = "200";
                response.status_message = "Program Updated Successfully";
                response.result = program;
                res.status(200).json(response);


            } else {
                response.status_code = "404";
                response.status_message = "Program not found";
                response.result = null;
                res.status(200).json(response);
            }

        }
        catch (err) {
            response.status_code = "403";
            response.errorObj = err;
            response.status_message = "Program could not be updated";
            response.result = null;
            res.status(403).json(response);
        }
    },


    removeProgram: async (req, res) => {
        const program = await Program.findByIdAndRemove(req.params.programId);
        if (!program) {
            response.status_code = "404";
            response.status_message = "Program not found";
            response.result = null;
            res.status(200).json(response);
        }
        response.status_code = "200";
        response.status_message = "Program deleted Successfully";
        response.result = program;
        res.status(200).json(response);
    }
};