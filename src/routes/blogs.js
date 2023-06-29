const express = require('express');
const router = express.Router();
const BlogsController = require('../app/controllers/blogsController')
const authenticateToken = require('../app/middleware/authMiddleware');




router.patch('/:id/restore', BlogsController.restore);
router.delete('/:id', BlogsController.destroy);
router.put('/:id', BlogsController.update);
router.get('/:id/edit', BlogsController.edit);
router.get('/create',authenticateToken, BlogsController.create);
router.post('/store', BlogsController.store);



module.exports = router;
