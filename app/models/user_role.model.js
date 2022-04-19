var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserRoleSchema = new Schema(
    {
        
        user_id: { type: Schema.Types.ObjectId, ref: 'User'}, 
        role_id: { type: Schema.Types.ObjectId, ref: 'Role'}
   
    },
    {
        timestamps: true
    }
);

//Virtual for event's URL


//Export model
module.exports = mongoose.model('UserRole', UserRoleSchema);