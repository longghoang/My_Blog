const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const KeySchema = new Schema(
{
 key: String,
 hmac: String
},
{
  collection: 'Hmac'
}
);

module.exports = mongoose.model('Hmac', KeySchema);
