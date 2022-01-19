
module.exports = {
    getAllModules: async () => {
        const moduleSchema = require('./../Schema/modules');
        const modules = await moduleSchema.find({},'-__v');
        return modules;
    }
}