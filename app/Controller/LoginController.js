const UserService = require('./../Services/UserService');

module.exports = {
    
    login: async (request,response)=>{
        UserService.getTokeByCredentials(request.body.email,request.body.password)
        .then(user => {
            if(user){
                return sendApiResponse(response,app_status_code.success,"Login Successfully",user)
            }
        })
        .catch(err => {
            return sendApiErrorResponse(response,app_status_code.not_found,err.message,{})           
        })
        
    }
}