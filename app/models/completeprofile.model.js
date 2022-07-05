var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CompleteProfileSchema = new Schema(
    {
        profilePic: { type: String },
        martialStatus: { type: String, enum: ['Single', 'Married', 'Seperated', 'Divorced'] },
        address : { type: Schema.Types.ObjectId, ref: 'Address'},
        occupation:{type:String},
        highestQualification: {type: String},
        languages: [{type:String }],
        aboutByvk : { type: String},
        emergencyContact1 : { type: Schema.Types.ObjectId, ref: 'EmergencyContact'},
        emergencyContact2 : { type: Schema.Types.ObjectId, ref: 'EmergencyContact'}
    },
    {
        timestamps: true
    }
);

// Virtual for event's URL


CompleteProfileSchema.virtual('url')
    .get(function () {
        return '/byvk/registerevent/' + this._id;
    });

//Export model
module.exports = mongoose.model('CompleteProfile', CompleteProfileSchema);