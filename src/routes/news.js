const express = require('express');
const router = express.Router();
const newsController = require('../app/controllers/newsController')
const registerController = require('../app/controllers/registerController')
const loginController = require('../app/controllers/loginController')
const logoutController = require('../app/controllers/logoutController')
const authenticateToken = require('../app/middleware/authMiddleware');




router.get('/search',authenticateToken, newsController.search);
router.get('/register', registerController.register);
router.get('/login', loginController.login);
router.get('/logout', logoutController.logout);
router.post('/login/signin', loginController.signin);
router.get('/',authenticateToken,newsController.index);
router.get('/:slug',authenticateToken, newsController.read);


module.exports = router;
