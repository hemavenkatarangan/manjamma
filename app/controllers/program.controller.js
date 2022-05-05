const Program = require('../models/program.model.js');
const errorDetail = require('../helpers/errorHelpers');
let response ={};

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
        const {programId} = req.params;
        const program = await Program.findById(programId);
        if (!program) {
            return res.status(404).send({
                message: "Program not found with id " + req.params.programId
            });
        }

        response.status_code = "200";
        response.status_message = "All Programs";
        response.result = program;  
        res.status(200).json(response);
    },

    getCompleteProgram: async (req, res) => {
        const {programId} = req.params;
        const program = await Program.findById(programId).populate('courseType').populate('users');
        if (!program) {
            return res.status(404).send({
                message: "Program not found with id " + req.params.programId
            });
        }
        res.status(200).json(program);
    },
    createProgram: async (req, res) => {
        const newProgram = new Program(req.body);
        const program = await newProgram.save();
        res.status(200).json(program);
    },

    updateProgram: async (req, res) => {
        const program = await Program.findByIdAndUpdate(req.params.programId, req.body, { new: true });
        res.status(200).json(program);
    },

    replaceProgram: async (req, res) => {
        const {programId} = req.params;
        const program = req.body;
        const resultProgram = await Program.findByIdAndUpdate(programId, program, { new: true });
        res.status(200).json(resultProgram);
    },

    removeProgram: async (req, res) => {
        const program = await Program.findByIdAndRemove(req.params.programId);
        if (!program) {
            return res.status(404).send({
                message: "Program not found with id " + req.params.programId
            });
        }
        res.status(200).json({ message: 'deleted the program successfully', deletedProgram: program });
    }
};