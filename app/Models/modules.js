const moduleSchema = require("./model");

module.exports = moduleSchema("Module",{
    name: {
        type: String,
        required: true
    },
    children: {
        type: Array,
        required: true
    },
    updated_at: {
        type: Date
    },
    created_at: {
        type: Date
    }
});