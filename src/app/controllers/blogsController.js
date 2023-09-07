const BlogPost = require('../models/blog')

class BlogsController {
    async create(req, res, next) {
        try {

            if (req.session.user) {
                res.render('blogs/create');
            } else {
                res.json('Bạn chưa đăng nhập')
            }
        } catch (error) {
          next(error);
        }
      }
      
      // Hàm lưu bài viết vào cơ sở dữ liệu
      async store(req, res, next) {
        try {
          const { title, text } = req.body;
      
          if (!title || !text) {
            return res.status(400).json({ message: "Điền nội dung vào ngay, không được để trống!" });
          }
      
          const userId = req.signedCookies.userId; // Lấy userId của người dùng hiện tại từ cookie
      
          const blog = new BlogPost({ title, text, userId });
      
          await blog.save(); // Lưu bài viết vào cơ sở dữ liệu
      
          res.redirect('/');
        } catch (error) {
          next(error);
        }
      }
    //edit
    async update(req, res, next) {
        try {

            const postId = req.params.id

          await  BlogPost.updateOne({ _id: postId }, req.body)

            res.redirect('/')

        }catch(error) {
            next(error)
        }
    }
    //edit
    async edit(req, res, next) {
        try {

            const editPost = req.params.id

            const post = await BlogPost.findOne({ _id:  editPost})

            if(!post) {
                res.status(404).json({ message: "Bài viết không tồn tại" })
            }

            const postToObject = post.toObject()

            res.render('blogs/edit', {
                Post: postToObject
            })

        }catch(error) {
            next(error)
        }
    }
        //delete
    async destroy(req, res,next) {
        try{
            const deleteBlogs = await BlogPost.delete({ _id: req.params.id })

            if(!deleteBlogs) {
                res.status(404).json({ message: "Error" })
            }

            res.redirect('back')


        }catch(error){
            next(error)
        }
    }

    //restore

async restore(req, res, next) {
    try {
        const restoredBlog = await BlogPost.findById(req.params.id);

        

        if(restoredBlog) {
            restoredBlog.deleted = true;
            return restoredBlog.save();
        }

        console.log(restoredBlog)
        if (!restoredBlog) {
            return res.status(404).json({ message: "Error" });
        }
        
        res.redirect('back');
    } catch (error) {
        next(error);
    }
}

  
  
  


   
      
}

module.exports = new BlogsController()