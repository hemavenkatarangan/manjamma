var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var MediaSchema = new Schema(
    {

        media_path: { type: Array },
        media_type: { type: String }

    },
    {
        timestamps: true
    }
);



//Export model
module.exports = mongoose.model('Media', MediaSchema);