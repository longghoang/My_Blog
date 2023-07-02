const express = require('express');
const router = express.Router();
const RegisterController = require('../app/controllers/RegisterController')





router.post('/signup', RegisterController.signup);
router.post('/sendemail/forgot', RegisterController.forgot);
router.post('/sendemail/confirm', RegisterController.confirm);
router.get('/changepass', RegisterController.changepass);
router.get('/sendemail', RegisterController.sendemail);


module.exports = router;
