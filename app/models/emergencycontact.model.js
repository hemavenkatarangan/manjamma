var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var EmergencyContactSchema = new Schema(
    {
        phoneNumber: { type: String },
        name : { type: String},
        relationship: {type: String} 
      
    },
    {
        timestamps: true
    }
);

// Virtual for event's URL


EmergencyContactSchema.virtual('url')
    .get(function () {
        return '/byvk/registerevent/' + this._id;
    });

//Export model
module.exports = mongoose.model('EmergencyContact', EmergencyContactSchema);