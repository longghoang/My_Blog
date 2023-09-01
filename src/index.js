const express = require('express')
const app = express()
const morgan = require('morgan')
const handlebars = require('express-handlebars');
const port = 4000
const route = require('./routes');
const path = require('path');
const methodOverride = require('method-override');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const sessionMiddleware = require('./app/middleware/sessionMiddleware')



// const axios = require('axios');
// const passwordGuesses = ['password1', '12345678', 'qwerty', 'letmein']; // Danh sách mật khẩu đoán

// const targetUrl = 'http://localhost:4000/login'; // Điều chỉnh URL đăng nhập của trang web của bạn

// async function performBruteForce() {
//   for (const passwordGuess of passwordGuesses) {
//     try {
//       const response = await axios.post(targetUrl, { email: 'abc@gmail.com', password: passwordGuess });

//       if (response.status === 200) {
//         console.log(`Login successful with password: ${passwordGuess}`);
//         break; // Thoát vòng lặp nếu đăng nhập thành công
//       }
//     } catch (error) {
//       console.log(`Login failed with password: ${passwordGuess}`);
//     }
//   }
// }

// performBruteForce();



// conectDB

const db = require('./config/db')

db.conect()



app.use(
    express.urlencoded({
        extended: true,
    }),
);

app.use(cookieParser('my-secret'))

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

app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))


app.engine(
    'hbs',
    handlebars.engine({
        defaultLayout: 'main',
        extname: 'hbs',
        helpers: {
            sum: (a,b) => a + b,
            encodeURIComponent: (value) => encodeURIComponent(value)

        }
    }),
);

app.use(methodOverride('_method'));



app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

route(app)

app.listen(port, () => console.log(`App listening in http://localhost:${port}`))