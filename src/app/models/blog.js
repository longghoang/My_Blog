const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogPost = new Schema(
{
  title: { type :String },
  text: { type :String },
  created_at: {
    type: Date,
    default: Date.now
  }
},
{
    collection: 'post',
},

);

module.exports = mongoose.model('Post', BlogPost, 'post' )