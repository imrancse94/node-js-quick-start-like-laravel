const schema = require('./../Models/users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const saltRounds = 10;
require('dotenv').config()

module.exports = {

    getAllusers() {
        return schema.find({}, { password: 0 });
    },
    async addUser(inputData) {
        inputData.password = await bcrypt.hash(inputData.password, saltRounds);
        var response = await schema.create(inputData);
        delete response['password'];
        return response;
    },
    async getTokeByCredentials(email, password) {
        var data = {}
        data = await schema.findOne({ email: email },{usergroup_ids:0});
        if (data && await bcrypt.compare(password, data.password)) {
            data = JSON.parse(JSON.stringify(data));
            delete data.password;
            const token = await this.generateToken(data);
            return {
                token: token,
                expires: process.env.JWT_TOEKN_EXPIRES_IN,
                user: data
            };
        }
        throw new Error('Invalid Credentials');
    },

    async generateToken(user) {
        const token = await jwt.sign(user,
            process.env.JWT_SECRET,
            {
                expiresIn: process.env.JWT_TOEKN_EXPIRES_IN,
            }
        );

        // return token
        return token;
    },

}