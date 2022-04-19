const Role = require('../models/role.model.js');
let response = {};

module.exports = {

    allRoles: async (req, res, next) => {        
       
        try {

           
            const roles = await Role.find({});

            response.status_code = "200";
            response.status_message = "Roles Fund";
            response.result = roles;
            res.status(200).json(response);
        }
        catch (err) {
            response.status_code = "404";
            response.status_message = "Roles could not be Fund";
            response.result = null;
            res.status(404).json(response);
        }

    },
    getRole: async (req, res) => {
        const { roleId } = req.params;
        const role = await Role.findById(roleId);
        if (!role) {

            response.status_code = "404";
            response.status_message = "Role could not be Found for " +  req.params.roleId;
            response.result = null;
            return res.status(404).send(response);
        }
        else{
            response.status_code = "200";
            response.status_message = "Role Found for " +  req.params.roleId;
            response.result = role;
            res.status(200).json(response);
        }
      
    }, 



    createRole: async (req, res) => {

        try{
            const newRole = new Role(req.body);
            const role = await newRole.save();
            response.status_code = "200";
            response.status_message = "Role created";
            response.result = role;
            res.status(200).json(response);
        }

        catch(err){
            response.status_code = "400";
            response.status_message = "Role could not be created";
            response.result = null;
            res.status(200).json(response);
        }

        
    },
  

};