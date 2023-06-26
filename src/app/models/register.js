const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RegisterSchema = new Schema(
{
  email: { type: String },
  password: { type: String },
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
