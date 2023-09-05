const express = require('express');
const router = express.Router();
const storedController = require('../app/controllers/storedController')
const sessionMiddleware = require('../app/middleware/sessionMiddleware');





router.get('/blogs', sessionMiddleware,storedController.stored);
router.get('/trash', sessionMiddleware,storedController.trash);




module.exports = router;
