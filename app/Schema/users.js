const mongoose = require("mongoose");

const schema = mongoose.Schema({
	email:{
		type:String,
		required:true
	} ,
	password: {
		type: String,
		required:true
	},
	name: {
		type: String,
		required:true
	},
	email_verified_at: {
		type: Date
	},
	remember_token: {
		type: String
	},
	updated_at: {
		type: Date
	},
	created_at: {
		type: Date
	}
})

const model = mongoose.model("User", schema);

module.exports = model;