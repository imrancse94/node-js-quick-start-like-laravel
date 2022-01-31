const moduleSchema = require('../Models/modules');

module.exports = {
    getAllModules: async () => {
        try {
            const modules = await moduleSchema.find({},'-__v');
            return modules;
        } catch (error) {
            console.log(error.message);
            return error
        }
        
    },
    add: async (data) => {
        try {
            const module = await moduleSchema.create(data);
            return module;
        } catch (error) {
            return error.message;
        }
        
    },
    edit: async (id,data) => {
        try {
            const module = await moduleSchema.findByIdAndUpdate(id,data,{new: true});
            return module;            
        } catch (error) {
            return error.message;
        }
    },
    delete: async (id) => {
        try {
            const module = await moduleSchema.findByIdAndRemove(id);
            return module;            
        } catch (error) {
            return error.message;
        }
    }
}