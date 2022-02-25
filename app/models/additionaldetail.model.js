var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var AdditionalDetailSchema = new Schema(
    {
        additionalProperty:{ type: Schema.Types.ObjectId, ref: 'AdditionalProperty'},
        value:{type:String}        
    },
    {
        timestamps: true
    }
);

//Virtual for event's URL
AdditionalDetailSchema
    .virtual('url')
    .get(function () {
        return '/byvk/event/' + this._id;     
    });

//Export model
module.exports = mongoose.model('AdditionalDetail', AdditionalDetailSchema);