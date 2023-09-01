const mongoose = require('mongoose');

async function conect() {
    try {
        await mongoose.connect('mongodb+srv://My_Blog:long123@cluster0.gmcksri.mongodb.net/' ,{
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

