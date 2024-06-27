const express = require('express');
const router = express.Router();
const newsController = require('../app/controllers/newsController')
const registerController = require('../app/controllers/registerController')
const loginController = require('../app/controllers/loginController')
const logoutController = require('../app/controllers/logoutController')
const authenticateToken = require('../app/middleware/authMiddleware');
<<<<<<< HEAD
const sessionMiddleware  = require('../app/middleware/sessionMiddleware');
=======
>>>>>>> 60b9931ed9710200bb01b2b2133456de2f2162cb




<<<<<<< HEAD
router.get('/search',sessionMiddleware, newsController.search);
router.get('/register', registerController.register);
router.get('/login',authenticateToken, loginController.login);
router.get('/logout', logoutController.logout);
router.post('/login/signin', loginController.signin);
router.get('/', newsController.index);
router.get('/account',sessionMiddleware, newsController.account);
router.get('/:slug', sessionMiddleware, newsController.read);
=======
router.get('/search',authenticateToken, newsController.search);
router.get('/register', registerController.register);
router.get('/login', loginController.login);
router.get('/logout', logoutController.logout);
router.post('/login/signin', loginController.signin);
router.get('/',newsController.index);
router.get('/:slug',authenticateToken, newsController.read);
>>>>>>> 60b9931ed9710200bb01b2b2133456de2f2162cb


module.exports = router;
