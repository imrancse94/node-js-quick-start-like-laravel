const schema = require('../Schema/users');

module.exports = {
    getAllusers() {
        return schema.find({},{password:0});
    },
    addUser(inputData){
        return schema.create(inputData);
    }
};