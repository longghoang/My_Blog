const RegisterSchema = require('../models/register');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')


class LoginController {
    async login(req, res, next) {
        try {
            res.render('logins/login')
        }catch(error) {
            next(error)
        }
    }


    async signin(req, res, next) {
        try {
          const { email, password } = req.body;
      
          if (!email || !password) {
            return res.status(400).json({ message: "Vui lòng điền email và mật khẩu!" });
          }
      
          const user = await RegisterSchema.findOne({ email });
      
          if (!user) {
            return res.status(401).json({ message: "Email không hợp lệ" });
          }
      
          const isPasswordValid = await bcrypt.compare(password, user.password);
      
          if (!isPasswordValid) {
            return res.status(401).json({ message: "Sai mật khẩu" });
          }
      
          const token = jwt.sign({ email: user.email }, 'secret-key', { expiresIn: '1h' });
          
          // Gửi token về cho client trong cookie
          res.cookie('jwt', token);
      
          res.redirect('/');
        } catch (error) {
          next(error);
        }
      }
}

module.exports = new LoginController()