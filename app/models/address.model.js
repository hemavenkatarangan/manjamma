var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var AddressSchema = new Schema(
    {
        address1: { type: String },
        address2 : { type: String},
        city: {type: String},
        postalCode: { type : String}, 
              
        
    },
    {
        timestamps: true
    }
);

// Virtual for event's URL


AddressSchema.virtual('url')
    .get(function () {
        return '/byvk/registerevent/' + this._id;
    });

//Export model
module.exports = mongoose.model('Address', AddressSchema);