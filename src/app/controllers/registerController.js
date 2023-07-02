const RegisterSchema = require('../models/register');
const nodemailer = require("nodemailer");
const bcrypt = require('bcrypt');

class RegisterController {
    async register(req, res, next) {
        try {
            res.render('logins/register')
        }catch(error) {
            next(error)
        }
    }

    async signup(req, res, next) {
        try {
          const { email, password, verify } = req.body
      
          if (!email || !password) {
            return res.status(404).json({ message: "Email hoặc mật khẩu bị lỗi" })
          }

        const resisters =  await RegisterSchema.findOne({ email: email })

        if(resisters) {
          return res.status(404).json({ message: "Email đã tồn tại"})
        }

        if(password != verify){
          return res.status(404).json({ message: "Xác nhận mật khẩu thất bại" })
        }

        if(password.length < 8) {
          return res.status(404).json({ message: "Mật khẩu phải chứa ít nhất 8 ký tự" })
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const register = new RegisterSchema({ email, password: hashedPassword });
    
          await register.save()
      
          res.redirect('/login?message=Đăng+ký+thành+công')
      
        } catch (error) {
          next(error)
        }
      }

      ///

      async sendemail(req, res, next) {
        try {
            res.render('logins/forgotpassword')
        }catch(error) {
            next(error)
        }
    }


      /// forgot password

      

      async  forgot(req, res) {
        try {

          function generateVerificationCode() {
            return crypto.randomBytes(3).toString('hex').toUpperCase();
          }
          const verificationCode = generateVerificationCode();
          const { email  } = req.body;
      
          const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'nguyenhoanglongabc2002@gmail.com',
              pass: 'rlwiputjdxvvthat'
            }
          });
      
          
          await transporter.sendMail({
            from: 'nguyenhoanglongabc2002@gmail.com', 
            to: email, 
            subject: 'Hello ✔', 
            text: `Mã xác nhận của bạn là: ${verificationCode}`, 
          });



          
      
          return res.json({
            message: `Send mail complete for ${email}`
          });
        } catch (error) {
          console.error(error);
          return res.json({ message: 'error', error });
        }
      }

      // changepass

      async changepass(req, res, next) {
        try {
            res.render('logins/changepass')
        }catch(error) {
            next(error)
        }
    }

    // confirm
    async confirm(req, res, next) {
      try {
          res.render('logins/changepass')
      }catch(error) {
          next(error)
      }
  }
}

module.exports = new RegisterController()