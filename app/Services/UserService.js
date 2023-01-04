const UserModel = require('./../Models/users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const saltRounds = 10;
require('dotenv').config()

module.exports = {

    getAllusers: async () => {

        let result = {
            status_code: app_status_code.not_found,
            message: 'No data found',
            data: {}
        };

        try{

          const users = await UserModel.find();

          if(users.length > 0){
              result = {
                  status_code: app_status_code.success,
                  message: 'User get successfully',
                  data: users
              };
          }

        }catch (err){
            result.message = err.message
        }

        return result;
    },
    async addUser(inputData) {
        inputData.password = await bcrypt.hash(inputData.password, saltRounds);
        var response = await UserModel.create(inputData);
        console.log('response',response)
        delete response['password'];
        return response;
    },
    async editUser(id,inputData) {
        console.log('response',response)
        return;
        inputData.password = await bcrypt.hash(inputData.password, saltRounds);
        var response = await UserModel.findByIdAndUpdate(id,inputData);

        delete response['password'];
        return response;
    },
    async getTokeByCredentials(email, password) {
        var data = {}
        data = await UserModel.findOne({ email: email },{usergroup_ids:0,parent_id:0});
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