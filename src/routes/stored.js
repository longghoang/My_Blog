const express = require('express');
const router = express.Router();
const storedController = require('../app/controllers/storedController')
const authenticateToken = require('../app/middleware/authMiddleware');





router.get('/blogs', authenticateToken,storedController.stored);


module.exports = router;