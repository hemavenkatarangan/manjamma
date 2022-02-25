var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CourseSchema = new Schema(
    {
        name: { type: String},  
        description:{type: String},   
        qa: [{ type: Schema.Types.ObjectId, ref: 'QAAdmin'}], 
        additionalProperties:[{ type: Schema.Types.ObjectId, ref: 'AdditionalProperty'}],
        autoValidate: {type : Boolean, default: false } 
        
    },
    {
        timestamps: true
    }
);

//Virtual for event's URL
CourseSchema
    .virtual('url')
    .get(function () {
        return '/byvk/event/' + this._id;     
    });

//Export model
module.exports = mongoose.model('Course', CourseSchema);