const express = require('express');
const router = express.Router();
<<<<<<< HEAD
const RegisterController = require('../app/controllers/registerController')
=======
const RegisterController = require('../app/controllers/RegisterController')
>>>>>>> 60b9931ed9710200bb01b2b2133456de2f2162cb





router.post('/signup', RegisterController.signup);
<<<<<<< HEAD
router.post('/sendemail/forgot', RegisterController.forgot);
router.post('/sendemail/confirm', RegisterController.confirm);
router.post('/changepass', RegisterController.changepass);
router.get('/account/changepassword', RegisterController.viewchange);
router.get('/sendemail', RegisterController.sendemail);
router.get('/sendemail/nextpass', RegisterController.nextpass);
=======
>>>>>>> 60b9931ed9710200bb01b2b2133456de2f2162cb


module.exports = router;
