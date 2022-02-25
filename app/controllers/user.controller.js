const User = require('../models/user.model.js');
const RegisterEvent = require('../models/registerevent.model');
const { getError } = require('../helpers/errorHelpers')

module.exports = {

    allUsers: async (req, res, next) => {
        try {
            const users = await User.find({});
            res.status(200).json({ user: users });
        }
        catch (err) {
            next(err);
        }

    },

    loginUser: async (req,res) =>{

        console.log("inside login");
        let response = {};
        const email_id = req.body.email_id;
        console.log(req.body);

        console.log(email_id); 
        const password =  req.body.password;
        const user = await  User.findOne({ email_id : email_id  });
        console.log(user);
        if (!user) {
            response.status_code = "404";
            response.status_message = "Email is not registered";
            response.result = user;   
            res.status(200).json(response);
        }
        else{
          let fact = {};
            fact = await user.authenticate(password); 

           if(fact.status ===   "200"){
            response.status_code = "200";
            response.status_message = "user logged in successfully";
            response.result = user;
            response.token = fact.token;
            res.status(200).json(response);
           }

           else {

            response.status_code = "404";
            response.status_message = "Password Incorrect";
            response.result = user;
            response.token = fact.token;
            res.status(200).json(response);
           }
           

        }
        

    },

    getUser: async (req, res) => {
        const { userId } = req.value.params;
        const user = await User.findById(userId);



        if (!user) {
            sendError(req, res, 'user id', "User not found with id " + req.params.userId, 404);
        }
        res.status(200).json({ user: user, virtual: { age: user.age } });
    },

    registerUser1: async (req, res) => {

        const newUser = new User({
            first_name: req.body.first_name,            
            emailId: req.body.emailId,
            password: req.body.password
        });
        const user = await newUser.save();
        res.status(200).json({ user: user });
    },

    registerUser: async (req, res) => {
        let response = {};
        
        try {
            console.log(`inside user creation `);
          

            const newUser = new User({
                first_name: req.body.first_name,
                email_id: req.body.email_id,
                phone_num : req.body.phone_num,
                password: req.body.password
            });

            console.log("user creation completed");
            const user = await newUser.save();

            response.status_code = "200";
            response.status_message = "User Created Succesfully";
            response.result = user;


            res.status(200).json(response);
        }
        catch (error) {
            console.log(error.name, error.message);
            if (error.name === 'MongoError' && error.code === 11000) {
               return res.status(400).json(getError('email', 'email already exist'));
            }

            res.status(400).json(getError(error.name, error.message));
        }
    },

    createUser: async (req, res) => {
        const newUser = new User(req.value.body);
        const user = await newUser.save();
        res.status(200).json({ user: user });
    },

    updateUser: async (req, res) => {
        const user = await User.findByIdAndUpdate(req.value.params.userId, req.body, { new: true });
        if (!user) {
            return res.status(404).send({
                message: "User not found with id " + req.params.userId
            });
        }
        res.status(200).json({ user: user });
    },

    replaceUser: async (req, res) => {
        const { userId } = req.value.params;
        const user = req.value.body;
        const resultUser = await User.findByIdAndUpdate(userId, user, { new: true });
        if (!resultUser) {
            return res.status(404).send({
                message: "User not found with id " + req.params.userId
            });
        }
        res.status(200).json({ user: resultUser });
    },

    removeUser: async (req, res) => {
        const user = await User.findByIdAndRemove(req.value.params.userId);
        if (!user) {
            return res.status(404).send({
                message: "User not found with id " + req.value.params.userId
            });
        }
        res.status(200).json({ user: user });
    },


    createUserEvent: async (req, res) => {
        const { userId } = req.value.params;
        const registerEvent = new RegisterEvent(req.body);
        const registeredEvent = await registerEvent.save();
        const user = await User.findById(userId);
        user.events.push(registeredEvent);
        const userEvent = await user.save();
        res.status(201).json(userEvent);
    },

    getUserEvents: async (req, res) => {
        const { userId } = req.value.params;
        const user = await User.findById(userId).populate({
            path: 'events',
            populate: {
                path: 'event'
            }
        });

        if (!user) {
            return res.status(404).send({
                message: "User not found with id " + req.value.params.userId
            });
        }
        // const userEvents = user.events;       
        res.status(200).json(user.events);
    },

    getCompleteUserDetails: async (req, res) => {
        const { userId } = req.value.params;
        const user = await User.findById(userId).populate({
            path: 'events',
            populate: {
                path: 'event'
            }
        });

        if (!user) {
            return res.status(404).send({
                message: "User not found with id " + req.value.params.userId
            });
        }
        // const userEvents = user.events;       
        res.status(200).json(user.events);
    },

    getRegisteredEvent: async (req, res) => {
        const { userId } = req.params;
        const { registredEventId } = req.params;
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).send({
                message: "User not found with id " + req.value.params.userId
            });
        }

        if (user.events.includes(registredEventId)) {
            const registeredEvent = await RegisterEvent.findById(registredEventId).populate('event');
            return res.status(200).json(registeredEvent);
        }

        // const userEvents = user.events;       
        res.status(404).json({ "message": "Event not found" });
    }
};