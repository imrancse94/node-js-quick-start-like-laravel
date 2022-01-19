// user seeding
module.exports = async () => {
    const userSchema = require('./../app/Schema/users')
    const bcrypt = require('bcrypt');
    const password = await bcrypt.hash('123456', 10);
    await userSchema.create({
        email: "imrancse94@gmail.com",
        name: "Imran Hossain",
        password: password
    })
}

