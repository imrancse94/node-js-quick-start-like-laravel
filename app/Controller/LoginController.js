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
        
    },

    register: async (request,response)=>{
        UserService.register(request.body)
        .then(user => {
            if(user){
                return sendApiResponse(response,app_status_code.success,"Register Successfully",user)
            }
        })
        .catch(err => {
            return sendApiErrorResponse(response,app_status_code.not_found,err.message,{})           
        })
    },

    getUser: async (request,response)=>{
        UserService.getUser(request.params.id)
        .then(user => {
            if(user){
                return sendApiResponse(response,app_status_code.success,"Get User Successfully",user)
            }
        })
        .catch(err => {
            return sendApiErrorResponse(response,app_status_code.not_found,err.message,{})           
        })
    },

    
}