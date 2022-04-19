var mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const keys = require('./../../config/database.config');

var Schema = mongoose.Schema;

var UserSchema = new Schema(
    {
        first_name: { type: String },
        last_name: { type: String },
        profilePic: { type: String},
        override_validation : {type : Boolean, default : false},
        email_id: { type: String, required: true, index: { unique: true, dropDups: true } },
        password: { type: String, required: true },
        phone_num: { type: Number },
        permanent_address: { type: String },
        current_address: {type: String},
        city:{type: String},
        country:{type:String},
        nationality: { type: String },
        dob: { type: Date },
        additional_details: [{ type: Schema.Types.ObjectId, ref: 'AdditionalDetail' }],
        events: [{ type: Schema.Types.ObjectId, ref: 'RegisteredEvent' }],        
        complete_profile: {type : Boolean, default: false },
        emergency_num : {type: Number},       
        isAgreedTerms : {type : Boolean, default : false}

    },
    {
        timestamps: true
    }
);


UserSchema.virtual('age').get(function () {
    if (this.dob) {
        return Math.floor((Date.now() - this.dob.getTime()) / (1000 * 3600 * 24 * 365));
    }
    else
        return 0;

});;

UserSchema.pre('save', async function (next) {
    try {
        const hashpwd = await bcrypt.hash(this.password, 10);
        this.password = hashpwd;

    } catch (error) {

    }
});

UserSchema.methods = {
    authenticate: async function (pwd) {

        let fact = {};

        console.log("Inside Authenticate");
        const result = await bcrypt.compare(pwd, this.password);
        console.log(result);
       
        if (result) {

            console.log(this._id, this.email_id, this.role);

            const payload = {
                id: this._id,
                name: this.email_id, 
                role: this.role               

            };

            const  token =  jwt.sign(payload, keys.secretOrKey,  {
                expiresIn: "2h",
              });
        

            console.log(token);
            fact.status = "200";
            fact.message = " login success";
            fact.token = token;

            return fact;
           

        } else {

            fact.status = "404";
            fact.message = " login failed";
            fact.token = null;
          return fact;
        }
    }
};






//Export model
module.exports = mongoose.model('User', UserSchema);