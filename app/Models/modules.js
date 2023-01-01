const mongoose = require("./model");

const model = mongoose.model("Module", mongoose.Schema({
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
}, {versionKey: false}));

module.exports = {
    findByIdAndUpdate: async (id, data) => {
        return await model.findByIdAndUpdate(id, data, {new: true})
    },
	find: async () =>{
		return await module.find({},'-__v')
	}
};