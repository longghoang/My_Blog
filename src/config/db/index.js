const mongoose = require('mongoose');

async function conect() {
    try {
<<<<<<< HEAD
<<<<<<< HEAD
        await mongoose.connect('mongodb+srv://nguyenlonglqmb:Long%40123@cluster0pentest.a1gqpns.mongodb.net/' ,{
=======
        await mongoose.connect('mongodb://127.0.0.1:27017/blog' ,{
>>>>>>> 60b9931ed9710200bb01b2b2133456de2f2162cb
=======
        await mongoose.connect('mongodb+srv://nguyenlonglqmb:Long%40123@cluster0pentest.a1gqpns.mongodb.net/' ,{
>>>>>>> c2757401529cd6095c7cd76f4887c3213cda7a31
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
<<<<<<< HEAD
=======
module.exports = { conect }
>>>>>>> 60b9931ed9710200bb01b2b2133456de2f2162cb
=======
>>>>>>> c2757401529cd6095c7cd76f4887c3213cda7a31
