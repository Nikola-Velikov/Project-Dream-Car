const User = require("../models/user");

async function createUser (email,hashedPassword) {
 return   await User.create({
        email,
        hashedPassword
     })
}
module.exports= {
    create:createUser
}