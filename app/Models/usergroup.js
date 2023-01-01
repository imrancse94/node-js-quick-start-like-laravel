const usergroupSchema = require("./model");

module.exports = usergroupSchema("Usergroup",{
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
})
