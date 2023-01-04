const User = require('../Services/UserService');

module.exports = {
    getUserList: async (request,response)=>{
        const user = await User.getAllusers();
        return sendApiResponse(response,user.status_code,user.message,user.data)
    },

    addUser: async (request,response)=>{
        var user = {};
        
        try{
            user = await User.addUser(request.body);
        }catch(e){
            console.log('e', e);
        }
        
        return sendApiResponse(response,app_status_code.success,"User Added Successfully",user)
    },
    editUser: async (request,response)=>{
        var user = {};

        try{
            user = await User.editUser(request.params.id, request.body);
        }catch(e){
            console.log('e', e);
        }

        return sendApiResponse(response,user.status_code,user.message,user.data)
    }
}