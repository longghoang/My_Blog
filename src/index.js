const express = require('express')
const app = express()
const morgan = require('morgan')
const handlebars = require('express-handlebars');
<<<<<<< HEAD
const port = 4000
const route = require('./routes');
const path = require('path');
const methodOverride = require('method-override');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const sessionMiddleware = require('./app/middleware/sessionMiddleware')




=======
const port = 5000
const route = require('./routes');
const path = require('path');
const methodOverride = require('method-override');
// const session = require('express-session');
const cookieParser = require('cookie-parser');
>>>>>>> 60b9931ed9710200bb01b2b2133456de2f2162cb


// conectDB

const db = require('./config/db')

db.conect()

<<<<<<< HEAD


=======
>>>>>>> 60b9931ed9710200bb01b2b2133456de2f2162cb
app.use(
    express.urlencoded({
        extended: true,
    }),
);

<<<<<<< HEAD
app.use(cookieParser('my-secret'))
=======
app.use(cookieParser())
>>>>>>> 60b9931ed9710200bb01b2b2133456de2f2162cb

// app.use(
//     session({
//       secret: 'secret-key',
//       resave: false,
//       saveUninitialized: false,
//       cookie: {
//         secure: false,
//         maxAge: 3600000, // Thời gian hết hạn của session (1 giờ)
//       },
//     })
//   );

<<<<<<< HEAD
app.use(session({
    secret: 'secret_key', 
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 36000000000,
      secure: false, 
    },
  }));

=======
>>>>>>> 60b9931ed9710200bb01b2b2133456de2f2162cb

app.use(morgan('combined'));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

<<<<<<< HEAD
app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))


=======
>>>>>>> 60b9931ed9710200bb01b2b2133456de2f2162cb
app.engine(
    'hbs',
    handlebars.engine({
        defaultLayout: 'main',
        extname: 'hbs',
        helpers: {
<<<<<<< HEAD
            sum: (a,b) => a + b,
            encodeURIComponent: (value) => encodeURIComponent(value)

=======
            encodeURIComponent: function (value) {
                return encodeURIComponent(value);
            }
>>>>>>> 60b9931ed9710200bb01b2b2133456de2f2162cb
        }
    }),
);

app.use(methodOverride('_method'));

<<<<<<< HEAD


=======
>>>>>>> 60b9931ed9710200bb01b2b2133456de2f2162cb
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

route(app)

app.listen(port, () => console.log(`App listening in http://localhost:${port}`))