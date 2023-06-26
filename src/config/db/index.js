const mongoose = require('mongoose');

async function conect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/blog' ,{
            dbName: "My_Blog",
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Conect success')
    } catch(error) {
        console.log('Conect fail')
    }
}

module.exports = { conect }