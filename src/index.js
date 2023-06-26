const express = require('express')
const app = express()
const morgan = require('morgan')
const handlebars = require('express-handlebars');
const port = 5000
const route = require('./routes');
const path = require('path');
const methodOverride = require('method-override');
// const session = require('express-session');
const cookieParser = require('cookie-parser');


// conectDB

const db = require('./config/db')

db.conect()

app.use(
    express.urlencoded({
        extended: true,
    }),
);

app.use(cookieParser())

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


app.use(morgan('combined'));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.engine(
    'hbs',
    handlebars.engine({
        defaultLayout: 'main',
        extname: 'hbs',
        helpers: {
            encodeURIComponent: function (value) {
                return encodeURIComponent(value);
            }
        }
    }),
);

app.use(methodOverride('_method'));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

route(app)

app.listen(port, () => console.log(`App listening in http://localhost:${port}`))