var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var RoleSchema = new Schema(
    {
        
        role:{type:String} ,
        description : {type : String}       
    },
    {
        timestamps: true
    }
);

//Virtual for event's URL


//Export model
module.exports = mongoose.model('Role', RoleSchema);