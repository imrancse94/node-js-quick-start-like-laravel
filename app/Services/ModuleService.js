
module.exports = {
    getAllModules: async () => {
        const moduleSchema = require('../Models/modules');
        const modules = await moduleSchema.find({},'-__v');
        return modules;
    }
}