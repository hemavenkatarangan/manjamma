var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CourseSchema = new Schema(
    {
        course_title: { type: String}, 
        course_name : {type: String}, 
        course_description:{type: String}, 
        course_thumbnail : {type: String},
        carosal_images : [{type: String}], 
        contents : {type: String},      
        isActive :{type: Boolean, default : true}
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