const blogsRouter = require('./blogs');
const siteRouter = require('./news');
const registerRouter = require('./register');
<<<<<<< HEAD
const storeRouter = require('./stored');
const hmacRouter = require('./hmac');
=======
>>>>>>> 60b9931ed9710200bb01b2b2133456de2f2162cb






function route(app) {
    app.use('/', siteRouter);
    app.use('/blogs', blogsRouter);
    app.use('/register', registerRouter);
<<<<<<< HEAD
    app.use('/stored', storeRouter);
    app.use('/hmac/create', hmacRouter);
=======
>>>>>>> 60b9931ed9710200bb01b2b2133456de2f2162cb
   
}

module.exports = route;
