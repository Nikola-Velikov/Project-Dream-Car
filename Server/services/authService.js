const User = require('../models/user.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');



const JST_SECRET = 'wshjkowhojwhjohwqjhwqlhqkjkqjkq9090099990';

async function register(email, password) {
 

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
        email,
        hashedPassword,
    });


    const token = createSession(user);

    return token;
}

async function createSession({ _id, email, hashedPassword }) {
    const payload = {
        _id,
        email, 
        hashedPassword
    }

    const token = jwt.sign(payload, JST_SECRET);
    return token;
}

async function getAllUsers() {
    const result = User.find({}).lean();
    return result;
}

async function getUserById(id) {
    return User.findById(id).lean();
}

async function login({email, password}) {
    const user = await User.findOne({ email })
    if (!user) {
        throw new Error('Incorrect email or password!');
    }
    
    const hasMatch = await bcrypt.compare(password, user.hashedPassword);
    
    if (!hasMatch) {
        throw new Error('Incorrect email or password!');
    }
    return await createSession(user);
}

function verifyToken(token) {
    return jwt.verify(token, JST_SECRET);
}


module.exports = {
    register: register,
    getAllUsers: getAllUsers,
    getUserById: getUserById,
    login: login,
    verifyToken:verifyToken
}