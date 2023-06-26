const BlogPost = require('../models/blog')

class BlogsController {
   async create(req, res, next) {
    try {
        res.render('blogs/create')

    } catch(error) {
        next(error)
    }    
    } 

    async store(req, res, next) {
        try{
            const { title, text } = req.body

            if(!title || !text) {
                return res.status(400).json( { message: " Điền nội dung vào ngay, không được để trống ! " } )
            }

            

            const blog = new BlogPost({ title, text })

           await blog.save()
           res.redirect('/')
                
        }catch(error) {
            next(error)
        }
    }

    async update(req, res, next) {
        try {

            const postId = req.params.id

          await  BlogPost.updateOne({ _id: postId }, req.body)

            res.redirect('/')

        }catch(error) {
            next(error)
        }
    }

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


   
      
}

module.exports = new BlogsController()