const mongoose = require("mongoose");

const schema = mongoose.Schema({
	parent_id: {
		type: mongoose.Schema.Types.ObjectId,
		default: null
	},
	email:{
		type:String,
		required:true,
		unique: true 
	} ,
	password: {
		type: String,
		required:true
	},
	name: {
		type: String,
		required:true
	},
	usergroup_ids: {
		type: Array
	},
	updated_at: {
		type: Date
	},
	created_at: {
		type: Date
	}
},{ versionKey: false })

module.exports = mongoose.model("User", schema);