const express = require('express');
const router = express.Router();
const RegisterController = require('../app/controllers/RegisterController')





router.post('/signup', RegisterController.signup);


module.exports = router;
