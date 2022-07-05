const UserRole = require('../models/user_role.model');
let response = {};


module.exports = {

    allUserRoles: async (req, res, next) => {
        try {
            const user_roles = await UserRole.find({});
            response.status_code = "200";
            response.status_message = "user roles Found";
            response.result = user_roles;
            return res.status(200).json(response);
           
        }
        catch (err) {
            response.status_code = "404";
            response.status_message = "user roles not found";
            response.result = null;
            return res.status(200).json(response);
        }

    },
    getUserRole: async (req, res) => {
        const { user_id} = req.body;
        const user_roles = await UserRole.find({user_id:user_id});
        if (!user_roles) {

            response.status_code = "404";
            response.status_message = "user role not found";
            response.result = null;
            return res.status(200).json(response);
      
        }
        else{
            response.status_code = "200";
            response.status_message = "user role found";
            response.result = user_roles;
            res.status(200).json(response);
        }
       
    }, 

    getUserRoleMethod: async (user_id) => {
       
        const user_role =  await UserRole.find({user_id:user_id}).populate({
            path: 'role_id',
            populate: {
                path: 'role_id'
            }
        });
      return user_role;
       
    },



    createUserRole: async (req, res) => {
try {
    const newUserRole = new UserRole(req.body);
    const user_role = await newUserRole.save();
    
    response.status_code = "200";
    response.status_message = "user role created";
    response.result = user_role;
    return res.status(200).json(response);
}

catch(err){
    response.status_code = "404";
    response.status_message = "user could not be created";
    response.result = null;
    return res.status(404).json(response);
}
       
}

  

};