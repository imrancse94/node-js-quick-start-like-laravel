const modules = require('../Models/modules');

module.exports = {
    getAllModules: async (params = {}) => {
        const result = {
            status_code: app_status_code.not_found,
            message: 'No data found',
            data: {}
        };

        try {
            const module = await modules.find(params);
            if (module.length > 0) {
                result['status_code'] = app_status_code.success
                result['message'] = 'Module list found successfully'
                result['data'] = module
            }
        } catch (error) {
            console.log('Error', error.message);
            //return error
        }
        return result
    },
    add: async (data) => {
        const result = {};
        try {
            const module = await modules.create(data);
            return module;
        } catch (error) {
            return error.message;
        }

    },
    edit: async (id, data) => {
        try {
            const module = await modules.findByIdAndUpdate(id, data);
            return module;
        } catch (error) {
            return error.message;
        }
    },
    delete: async (id) => {
        try {
            const module = await modules.findByIdAndRemove(id);
            return module;
        } catch (error) {
            return error.message;
        }
    }
}