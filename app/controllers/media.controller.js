const Media = require('../models/media.model');
let response = {};


module.exports = {

    allMedia: async (req, res, next) => {
        try {
            const medias = await Media.find({});
            response.status_code = "200";
            response.status_message = "Media Data Found";
            response.result = medias;
            return res.status(200).json(response);

        }
        catch (err) {
            response.status_code = "404";
            response.status_message = "Media data not found";
            response.result = null;
            return res.status(200).json(response);
        }

    },
    getMedia: async (req, res) => {
        const { media_type } = req.body;
        const medias = await Media.find({ media_type: media_type });
        if (!medias) {

            response.status_code = "404";
            response.status_message = "Media Data not found";
            response.result = null;
            return res.status(200).json(response);

        }
        else {
            response.status_code = "200";
            response.status_message = "Media data found";
            response.result = medias;
            res.status(200).json(response);
        }

    },

    createMedia: async (req, res) => {
        try {
            const newMedia = new Media(req.body);
            const media = await newMedia.save();

            response.status_code = "200";
            response.status_message = "Media data created";
            response.result = media;
            return res.status(200).json(response);
        }

        catch (err) {
            response.status_code = "404";
            response.status_message = "Media could not be created";
            response.result = null;
            return res.status(404).json(response);
        }

    }



};