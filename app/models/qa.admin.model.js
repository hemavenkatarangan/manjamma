var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var QAAdminSchema = new Schema(
    {
        question: { type: String },
        questionType: { type: String, enum: ['Descriptive', 'Selective', 'Multiple Choice'], default: 'Selective' },
        category : {type: String, enum: ['Health', 'Add Information', 'YE'], default: 'Health'},
        expectedAnswer: [{ type: String, default: 'NA' }],
        preDefinedValues: [{ type: String }],
        isAutoValidate: { type: Boolean, default: false },
        isMandetory: { type: Boolean, default: false },
        course: { type: Schema.Types.ObjectId, ref: 'Course' }

    },
    {

        timestamps: true
    }
);

//Virtual for event's URL
QAAdminSchema
    .virtual('url')
    .get(function () {
        return '/byvk/event/' + this._id;
    });

//Export model
module.exports = mongoose.model('QAAdmin', QAAdminSchema);