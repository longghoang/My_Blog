const mongoose = require('mongoose');
const Schema = mongoose.Schema;
<<<<<<< HEAD
const mongooseDelete = require('mongoose-delete')
=======
>>>>>>> 60b9931ed9710200bb01b2b2133456de2f2162cb

const BlogPost = new Schema(
{
  title: { type :String },
  text: { type :String },
  created_at: {
    type: Date,
    default: Date.now
<<<<<<< HEAD
  },
  userId: { type: Schema.Types.ObjectId, ref: 'User' },
  deleted: {
    type: Boolean,
    default: null
=======
>>>>>>> 60b9931ed9710200bb01b2b2133456de2f2162cb
  }
},
{
    collection: 'post',
},

);

<<<<<<< HEAD
BlogPost.plugin(mongooseDelete, {
   overrideMethods: 'all',
   deletedAt: true
 })

module.exports = mongoose.model('Post', BlogPost, 'post')
=======
module.exports = mongoose.model('Post', BlogPost, 'post' )
>>>>>>> 60b9931ed9710200bb01b2b2133456de2f2162cb
