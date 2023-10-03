// user/login
// user /register
 const express = require('express');
 const router = express.Router();
 const userModel = require('../Scheme/schemeUser.js');
 const bcrypt = require("bcrypt");
 
 
const{
  registro,
  //  loguear,
} = require('../Controllers/controllersUser.js');

  router.post('/register', registro);

//  router.post('/login', loguear);

module.exports = router;