var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var QASchema = new Schema(
    {
        question: { type: Schema.Types.ObjectId, ref: 'QAAdmin'},
        answer: [{type: String }],
        event: { type: Schema.Types.ObjectId, ref: 'Event'}
              
        
    },
    {
        timestamps: true
    }
);

//Virtual for event's URL
QASchema
    .virtual('url')
    .get(function () {
        return '/byvk/event/' + this._id;     
    });

//Export model
module.exports = mongoose.model('QA', QASchema);