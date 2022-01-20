const mongoose = require("mongoose");

const schema = mongoose.Schema({
	name:{
		type:String,
		required:true
	},
    role_ids:{
        type:Array,
        required:true
    },
	updated_at: {
		type: Date
	},
	created_at: {
		type: Date
	}
},{ versionKey: false })

module.exports = mongoose.model("Usergroup", schema);