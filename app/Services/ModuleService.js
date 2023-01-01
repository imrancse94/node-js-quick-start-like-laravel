const module = require('../Models/modules');

module.exports = {
    getAllModules: async () => {
        try {
            const modules = await module.find({},'-__v');
            return modules;
        } catch (error) {
            console.log(error.message);
            return error
        }
        
    },
    add: async (data) => {
        try {
            const module = await module.create(data);
            return module;
        } catch (error) {
            return error.message;
        }
        
    },
    edit: async (id,data) => {
        try {
            const module = await module.findByIdAndUpdate(id,data);
            return module;            
        } catch (error) {
            return error.message;
        }
    },
    delete: async (id) => {
        try {
            const module = await module.findByIdAndRemove(id);
            return module;            
        } catch (error) {
            return error.message;
        }
    }
}