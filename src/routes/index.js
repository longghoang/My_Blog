const blogsRouter = require('./blogs');
const siteRouter = require('./news');
const registerRouter = require('./register');






function route(app) {
    app.use('/', siteRouter);
    app.use('/blogs', blogsRouter);
    app.use('/register', registerRouter);
   
}

module.exports = route;
