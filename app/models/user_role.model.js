var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserRoleSchema = new Schema(
    {
        
        user_id:{ type: String }, 
        role_id:{ type: String }
   
    },
    {
        timestamps: true
    }
);

//Virtual for event's URL


//Export model
module.exports = mongoose.model('UserRole', UserRoleSchema);