const express = require('express');
const router = express.Router();
const hmacController = require('../app/controllers/hmacController')






router.get('/',hmacController.hmac);
router.get('/compare',hmacController.compare);
router.get('/readkey',hmacController.readkey);





module.exports = router;
