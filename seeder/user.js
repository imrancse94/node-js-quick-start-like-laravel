// user seeding
module.exports = async () => {
    const userSchema = require('./../app/Models/users')
    const bcrypt = require('bcrypt');
    const password = await bcrypt.hash('123456', 10);
    return await userSchema.create({
        email: "imrancse94@gmail.com",
        name: "Imran Hossain",
        password: password
    })
}

