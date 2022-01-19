const schema = require('./../Schema/users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config()

module.exports = {

    getAllusers() {
        return schema.find({}, { password: 0 });
    },
    addUser(inputData) {
        return schema.create(inputData);
    },
    async getTokeByCredentials(email, password) {
        var data = {}
        data = await schema.findOne({ email: email });
        if (data && await bcrypt.compare(password, data.password)) {
            const token = await this.generateToken(email, data._id);
            return {
                token: token,
                expires: process.env.JWT_TOEKN_EXPIRES_IN,
                user: data
            };
        }
        throw new Error('Invalid Credentials');
    },

    async generateToken(email, id) {
        const token = await jwt.sign({ user_id: id, email },
            process.env.JWT_SECRET,
            {
                expiresIn: process.env.JWT_TOEKN_EXPIRES_IN,
            }
        );

        // return token
        return token;
    }
}