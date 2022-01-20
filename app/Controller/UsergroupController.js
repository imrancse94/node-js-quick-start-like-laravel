const moduleService = require('../Services/ModuleService');

module.exports = {

    getModuleList: async (request,response)=>{
        const data =  await moduleService.getAllModules();
        return sendApiResponse(response,app_status_code.success,"Module List",data)
    }
}