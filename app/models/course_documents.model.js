var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CourseDocumentSchema = new Schema(
    {
        name: { type: String },
        type: { type: String, enum: ['text', 'doc'], default: 'text' },
        isUserData: { type: Boolean },
        course: { type: Schema.Types.ObjectId, ref: 'Course' }
    },
    {
        timestamps: true
    }
);

//Virtual for event's URL
CourseDocumentSchema
    .virtual('url')
    .get(function () {
        return '/byvk/event/' + this._id;
    });

//Export model
module.exports = mongoose.model('CourseDocument', CourseDocumentSchema);