/**
 * @author Ruchi Shinde
 */

var mongoose = require('mongoose');
const crypto = require('crypto');
const Schema = mongoose.Schema;

const Users = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    mealType: {
        type: String,

    },
    cuisine: {
        type: String,
    },
    password: {
        type: String,
        required: true
    },
    salt: {
        type: String,
    },
    userId: {
        type: Number,
        default: function () {
            return Math.floor(Math.random() * 1234) + 10000;
        },
        index: { unique: true }
    },
    cart: {
        type: String
    },

    orderId: {
        type: String
    },
    userType: {
        type: String
    },

    credits: {
        type: String
    }
});

/**
 * This code is derived from https://www.loginradius.com/blog/async/password-hashing-with-nodejs/
 * @param {String} password 
 */

Users.method(validatePassword = (password) => {
    console.log(Users);
    let hashedPassword = crypto.pbkdf2Sync(password,
        this.salt, 1000, 64, `sha512`).toString(`hex`);
    if (this.Password === hashedPassword) {
        return true;
    }
},
getPassword = (password) => {
    this.salt = crypto.randomBytes(16).toString('hex');
    let saltedPassword = crypto.pbkdf2Sync(password,
        this.salt, 1000, 64, `sha512`).toString(`hex`);
        this.password = saltedPassword;
    console.log(this.salt + " " + saltedPassword);
    return saltedPassword;
},
createSalt = () => {
    let salt = crypto.randomBytes(16).toString('hex');
    return salt;
}
);

Users.methods.getPassword = (salt, password) => {
    let saltedPassword = crypto.pbkdf2Sync(password,
        salt, 1000, 64, `sha512`).toString(`hex`);
    console.log(salt + " " + saltedPassword);
    return saltedPassword;
}

Users.methods.createSalt = () => {
    let salt = crypto.randomBytes(16).toString('hex');
    return salt;
}

module.exports = mongoose.model("Users", Users);