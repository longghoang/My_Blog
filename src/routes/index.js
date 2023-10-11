const blogsRouter = require('./blogs');
const siteRouter = require('./news');
const registerRouter = require('./register');
const storeRouter = require('./stored');
const hmacRouter = require('./hmac');






function route(app) {
    app.use('/', siteRouter);
    app.use('/blogs', blogsRouter);
    app.use('/register', registerRouter);
    app.use('/stored', storeRouter);
    app.use('/hmac/create', hmacRouter);
   
}

module.exports = route;
