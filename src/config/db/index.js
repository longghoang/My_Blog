const mongoose = require('mongoose');

async function conect() {
    try {
<<<<<<< HEAD
        await mongoose.connect('mongodb+srv://nguyenlonglqmb:Long%40123@cluster0pentest.a1gqpns.mongodb.net/' ,{
=======
        await mongoose.connect('mongodb://127.0.0.1:27017/blog' ,{
>>>>>>> 60b9931ed9710200bb01b2b2133456de2f2162cb
            dbName: "My_Blog",
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Conect success')
    } catch(error) {
        console.log('Conect fail')
    }
}

<<<<<<< HEAD
module.exports = { conect }

// 
=======
module.exports = { conect }
>>>>>>> 60b9931ed9710200bb01b2b2133456de2f2162cb
