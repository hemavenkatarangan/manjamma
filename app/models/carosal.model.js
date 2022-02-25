var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CarosalSchema = new Schema(
    {
        name: { type: String},  
        header:{type: String},  
        subHeader: {type: String},
        link:  {type: String}, 
        image : {type: String}        
        
    },
    {
        timestamps: true
    }
);

//Virtual for event's URL
CarosalSchema
    .virtual('url')
    .get(function () {
        return '/byvk/event/' + this._id;     
    });

//Export model
module.exports = mongoose.model('Carosal', CarosalSchema);