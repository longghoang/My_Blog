const RegisterSchema = require('../models/register');
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
          res.status(404).json({ message: "Email đã tồn tại"})
        }

          if(password != verify){
            res.status(404).json({ message: "Xác nhận mật khẩu thất bại" })
          }

        const hashedPassword = await bcrypt.hash(password, 10);

        const register = new RegisterSchema({ email, password: hashedPassword });
      
        
      
          await register.save()
      
          res.redirect('/?message=Đăng+ký+thành+công')
      
        } catch (error) {
          next(error)
        }
      }
      
}

module.exports = new RegisterController()