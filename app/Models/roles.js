const roleSchema = require("./model");

module.exports = roleSchema("Role", {
    name:{
        type:String,
        required:true
    },
    permission:[]
});