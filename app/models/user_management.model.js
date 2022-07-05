var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserManagementSchema = new Schema(
    {

        program_id: { type: String },
        user_id: { type: String },
        address_1: { type: String },
        address_2: { type: String },
        city:{type: String},
        state:{type: String},
        country:{type: String},
        status:{type:String,enum: ['REGISTERED', 'APPROVED', 'REJECTED'], default: 'REGISTERED'},
        reject_reason:{type:String}
        
    },
    {
        timestamps: true
    }
);



//Export model
module.exports = mongoose.model('UserManagement', UserManagementSchema);