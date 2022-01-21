const moduleService = require('./../Services/ModuleService');

module.exports = {

    list: async (request,response)=>{
        const data =  await moduleService.getAllModules();
        return sendApiResponse(response,app_status_code.success,"Module List",data)
    },

    add: async (request,response)=>{
        const data =  await moduleService.add(request.body);
        return sendApiResponse(response,app_status_code.success,"Module Added",data)
    },
    edit: async (request,response)=>{
        const data =  await moduleService.edit(request.params.id,request.body);
        return sendApiResponse(response,app_status_code.success,"Module Edited",data)
    },
    delete: async (request,response)=>{
        const data =  await moduleService.delete(request.params.id);
        return sendApiResponse(response,app_status_code.success,"Module Deleted",data)
    }
}