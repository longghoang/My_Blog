const express = require('express');
const router = express.Router();
const storedController = require('../app/controllers/storedController')
const authenticateToken = require('../app/middleware/authMiddleware');





router.get('/blogs', authenticateToken,storedController.stored);
router.get('/trash', authenticateToken,storedController.trash);




module.exports = router;
