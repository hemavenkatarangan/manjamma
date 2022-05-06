var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ProgramSchema = new Schema(
    {
        name: { type: String },
        description:{type: String},
        program_fee: { type: Number },
        course: { type: Schema.Types.ObjectId, ref: 'Course' },
        program_type : { type: String, enum: ['Online', 'Offline', 'Hybrid']},
        status: { type: String, enum: ['Not Started', 'Open', 'InProgress', 'Cancelled', 'Completed', 'Closed'], default: 'Not Started' },
        min_age: { type: Number },
        max_age: { type: Number },
        registration_start_date: { type: Date },
        registration_end_date: { type: Date },
        publish_date: { type: Date },
        program_start_date: { type: Date },
        program_end_date: { type: Date },
        program_max_size: { type: Number },
        registered_count: { type: Number },
        received_application_count:{type : Number},
        registration_acceptance_count : {type: Number},
        close_registration:{type: Boolean, default: false}
        
    },
    {
        timestamps: true
    }
);


//Export model
module.exports = mongoose.model('Program', ProgramSchema);