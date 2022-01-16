const User = require('../Models/users');
const bcrypt = require('bcrypt');

module.exports = {
    getUserList: async (request,response)=>{
        const user = await User.getAllusers();
        return senApiResponse(response,app_status_code.success,"Login Successfully",user)
    },

    addUser: async (request,response)=>{
        var user = {};
        try{
            user = await User.addUser(request.body);
        }catch(e){
            console.log('e', e);
        }
        
        return senApiResponse(response,app_status_code.success,"User Added Successfully",user)
    }
}