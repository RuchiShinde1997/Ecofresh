/**
 * @author Ruchi Shinde
 */

const async = require("async")
const Users = require("../models/usersModel");
const crypto = require("crypto");
const express = require("express");

/**
 * This code is derived from https://www.loginradius.com/blog/async/password-hashing-with-nodejs/
 * @param {String} password 
 */

validatePassword = (salt, password, actualPassword) => {
    console.log("inside validate");
    let hashedPassword = crypto.pbkdf2Sync(actualPassword,
        salt, 1000, 64, `sha512`).toString(`hex`);
    console.log(hashedPassword);
    if (password == hashedPassword) {
        console.log("inside if");
        return true;
    } else {
        console.log("inside else");
        return false;

    }

}

getPassword = (salt, password) => {
    let saltedPassword = crypto.pbkdf2Sync(password,
        salt, 1000, 64, `sha512`).toString(`hex`);
    console.log(this.salt + " " + saltedPassword);
    return saltedPassword;
}

createSalt = () => {
    let salt = crypto.randomBytes(16).toString('hex');
    return salt;
}


module.exports = { validatePassword, getPassword, createSalt };