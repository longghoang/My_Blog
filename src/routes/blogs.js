const express = require('express');
const router = express.Router();
const BlogsController = require('../app/controllers/blogsController')
<<<<<<< HEAD
const authenticateToken = require('../app/middleware/authMiddleware')
const sessionMiddleware = require('../app/middleware/sessionMiddleware')
=======
const authenticateToken = require('../app/middleware/authMiddleware');
>>>>>>> 60b9931ed9710200bb01b2b2133456de2f2162cb




<<<<<<< HEAD

router.patch('/:id/restore',sessionMiddleware, BlogsController.restore);
router.delete('/:id',sessionMiddleware, BlogsController.destroy);
router.put('/:id',sessionMiddleware, BlogsController.update);
router.get('/:id/edit',sessionMiddleware, BlogsController.edit);
router.get('/create',sessionMiddleware, BlogsController.create);
router.post('/store',sessionMiddleware, BlogsController.store);

=======
router.put('/:id', BlogsController.update);
router.get('/:id/edit', BlogsController.edit);
router.get('/create',authenticateToken, BlogsController.create);
router.post('/store', BlogsController.store);
>>>>>>> 60b9931ed9710200bb01b2b2133456de2f2162cb


module.exports = router;
