const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RegisterSchema = new Schema(
{
<<<<<<< HEAD
  loginAttempts: { type: Number, default: 0 },
  email: { type: String },
  password: { 
    type: String ,
    require: true,
    minlength:8
  },
=======
  email: { type: String },
  password: { type: String },
>>>>>>> 60b9931ed9710200bb01b2b2133456de2f2162cb
  created_at: {
    type: Date,
    default: Date.now
  }
},
{
  collection: 'User'
}
);

module.exports = mongoose.model('User', RegisterSchema);
