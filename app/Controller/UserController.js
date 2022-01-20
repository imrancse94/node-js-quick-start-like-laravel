const User = require('../Services/UserService');

module.exports = {
    getUserList: async (request,response)=>{
        const user = await User.getAllusers();
        //console.log('request',request.user);
        return sendApiResponse(response,app_status_code.success,"User list get Successfully",user)
    },

    addUser: async (request,response)=>{
        var user = {};
        
        try{
            user = await User.addUser(request.body);
        }catch(e){
            console.log('e', e);
        }
        
        return sendApiResponse(response,app_status_code.success,"User Added Successfully",user)
    }
}