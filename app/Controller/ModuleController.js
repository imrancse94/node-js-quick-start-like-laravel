const moduleService = require('./../Services/ModuleService');


module.exports = {

    getlist: async (request,response)=>{
        const module =  await moduleService.getAllModules();
        return sendApiResponse(response,module.status_code,module.message,module.data)
    },

    add: async (request,response)=>{
        const data =  await moduleService.add(request.body);
        return sendApiResponse(response,app_status_code.success,"Module Added",data)
    },
    edit: async (request,response)=>{
        const data = await moduleService.edit(request.params.id, request.body);
        console.log('ssss',data)
        sendApiResponse(response, app_status_code.success, "Module Edited", data)
    },
    delete: async (request,response)=>{
        const data =  await moduleService.delete(request.params.id);
        return sendApiResponse(response,app_status_code.success,"Module Deleted",data)
    },
    get: async (request,response)=>{
        const data =  await moduleService.get(request.params.id);
        return sendApiResponse(response,app_status_code.success,"Module Fetched",data)
    }
}