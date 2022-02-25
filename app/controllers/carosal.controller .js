const Carosal = require('../models/carosal.model.js');


module.exports = {

    allCarosals: async (req, res, next) => {
        try {
            const carosals = await Carosal.find({});
            res.status(200).json(carosals);
        }
        catch (err) {
            next(err);
        }

    },
    getCarosal: async (req, res) => {
        const { carosalId } = req.params;
        const carosal = await Carosal.findById(carosalId);
        if (!carosal) {
            return res.status(404).send({
                message: "Carosal not found with id " + req.params.carosalId
            });
        }
        res.status(200).json(carosal);
    }, 

    createCarosal: async (req, res) => {

        const newCarosal = new Carosal(req.body);
        const carosal = await newCarosal.save();
        res.status(200).json(carosal);
    },
  
    updateCarosal: async (req, res) => {
        const carosal = await Carosal.findByIdAndUpdate(req.params.carosalId, req.body, { new: true });
        res.status(200).json(carosal);
    },

    replaceCarosal: async (req, res) => {
        const { carosalId } = req.params;
        const carosal = req.body;
        const resultCarosal = await Carosal.findByIdAndUpdate(carosalId, carosal, { new: true });
        res.status(200).json(resultCarosal);
    },

    removeCarosal: async (req, res) => {
        const carosal = await Carosal.findByIdAndRemove(req.params.carosalId);
        if (!carosal) {
            return res.status(404).send({
                message: "Carosal not found with id " + req.params.carosalId
            });
        }
        res.status(200).json({ message: 'deleted the carosal successfully', deletedCarosal: carosal });
    }
};