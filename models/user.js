/*
 * File name: user.js
 * Author's name: Simranpreet Kaur (200427339)
 * Website name: http://localhost:3000/ and https://a-2-hospital-management.herokuapp.com
 * Description: This is the file that contains the data for user.
 */

const mongoose = require('mongoose')
const plm = require('passport-local-mongoose')
const User = new mongoose.Schema({
    username: String,
    password: String,
    //Google Login
    oauthId: String,
    oauthProvider: String,
    create: Date
})
//Make a SPECIAL class intended for user management
User.plugin(plm);

//make public
module.exports = mongoose.model('User', User)