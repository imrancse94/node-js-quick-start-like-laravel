const moduleService = require('../Services/ModuleService');

module.exports = {

    getModuleList: async (request,response)=>{
        const module =  await moduleService.getAllModules();
        return sendApiResponse(response,app_status_code.success,module.message,module.data)
    }
}