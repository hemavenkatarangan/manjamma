var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var AuditSchema = new Schema(
    {
        user_id: { type : String},
        date_time: { type: Date },         
        action: {type: String}
        
    },
    {
        timestamps: true
    }
);

// Virtual for event's URL



//Export model
module.exports = mongoose.model('Audit', AuditSchema);