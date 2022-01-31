const mongoose = require("./model");

const schema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    permission:[]
},{ versionKey: false });


module.exports = mongoose.model("Role", schema);