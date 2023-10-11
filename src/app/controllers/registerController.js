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
          return res.status(404).json({ message: "Email đã tồn tại !!"})
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

      

    async forgot(req, res) {
        try {

          function generateRandomNumber() {
            const randomNumber = Math.floor(Math.random() * 9000) + 1000; // Tạo số ngẫu nhiên từ 1000 đến 9999
            return randomNumber.toString();
          }
          
          
          const verificationCode = generateRandomNumber();
          const { email  } = req.body;

          const emailDb = await RegisterSchema.findOne({ email: email })

          if(!emailDb) {
            return res.json('Tài khoản này chưa được đăng ký')
          }
      
          const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'nguyenhoanglongabc2002@gmail.com',
              pass: 'orkkrrgudnvjfpio'
            }
          });
      
          
          await transporter.sendMail({
            from: 'nguyenhoanglongabc2002@gmail.com', 
            to: emailDb, 
            subject: 'Hello ✔', 
            text: `Mã xác nhận của bạn là: ${verificationCode}`, 
          });

          const expiryDate = new Date(Date.now() + 60 * 1000);
          const expiryDate2 = new Date(Date.now() + 360 * 1000); 

          // Đặt cookie và đặt thời hạn cho nó
          res.cookie('codeVerify', verificationCode, { expires: expiryDate, signed: true });
          res.cookie('email', email, { expires: expiryDate2, signed: true });
          



          
      
          return res.json({
            message: `Send mail complete for ${emailDb}`
          });
        } catch (error) {
          console.error(error);
          return res.json({ message: 'Not sended code', error });
        }
      }

      ///view changepass

      async nextpass(req, res, next) {
        try {
            res.render('logins/changepass')
        }catch(error) {
            next(error)
        }
    }

      // changepass

      async changepass(req, res, next) {
        try {
          const { newpass, verifypass } = req.body

          if(newpass != verifypass) {
            return res.json('Mật khẩu không khớp')
          }

          const hashedPassword = await bcrypt.hash(newpass, 10);

          const emailUser = req.signedCookies.email

          await RegisterSchema.updateOne({ email: emailUser }, { password: hashedPassword })

          res.redirect('/')
            
        }catch(error) {
            next(error)
        }
    }

    // confirm
    async confirm(req, res, next) {
      try {
        const codeVerify = req.signedCookies.codeVerify

        if(!codeVerify){
          return res.status(404).json({ message: "Code is not Verify" })
        }

        const { code } = req.body

        if(code === codeVerify) {
          

          res.redirect('/register/sendemail/nextpass')
        } else {
          return res.json('Mã xác nhận không tồn tại')
        }

          
      }catch(error) {
          next(error)
      }
  }
}

module.exports = new RegisterController()