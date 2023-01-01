const userSchema = require("./model");

module.exports = userSchema("User",{
	parent_id: {
		type: 'ObjectId',
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
})
