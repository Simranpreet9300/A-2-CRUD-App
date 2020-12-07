/*
 * File name: users.js
 * Author's name: Simranpreet Kaur (200427339)
 * Website name: http://localhost:3000/ and https://a-2-hospital-management.herokuapp.com
 * Description: This is the file that contains the express routes for all users
 */

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
