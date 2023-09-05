const express = require('express');
const router = express.Router();
const BlogsController = require('../app/controllers/blogsController')
const authenticateToken = require('../app/middleware/authMiddleware')
const sessionMiddleware = require('../app/middleware/sessionMiddleware')





router.patch('/:id/restore',sessionMiddleware, BlogsController.restore);
router.delete('/:id',sessionMiddleware, BlogsController.destroy);
router.put('/:id',sessionMiddleware, BlogsController.update);
router.get('/:id/edit',sessionMiddleware, BlogsController.edit);
router.get('/create',sessionMiddleware, BlogsController.create);
router.post('/store',sessionMiddleware, BlogsController.store);



module.exports = router;
