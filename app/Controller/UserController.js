const User = require('../Models/users');
const bcrypt = require('bcrypt');

module.exports = {
    getUserList: async (request,response)=>{
        const user = await User.getAllusers();
        return sendApiResponse(response,app_status_code.success,"Login Successfully",user)
    },

    addUser: async (request,response)=>{
        var user = {};
        
        try{
            request.body.password = await bcrypt.hash(request.body.password, 10);
            user = await User.addUser(request.body);
        }catch(e){
            console.log('e', e);
        }
        
        return sendApiResponse(response,app_status_code.success,"User Added Successfully",user)
    }
}