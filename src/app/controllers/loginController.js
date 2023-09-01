const RegisterSchema = require('../models/register');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')


class LoginController {

  constructor() {
    // Khai báo một đối tượng để lưu thông tin số lần thử đăng nhập sai của mỗi người dùng
    this.loginAttempts = {};
}

    async login(req, res, next) {
        try {
            res.render('logins/login')
        }catch(error) {
            next(error)
        }
    }


  
    async signin(req, res, next) {
      try {
        const { email, password, 'g-recaptcha-response': recaptchaResponse } = req.body;
        // const { email, password } = req.body;

    // Xác minh reCAPTCHA
    const verifyRecaptchaUrl = `https://www.google.com/recaptcha/api/siteverify?secret=6Lf6UOsnAAAAAMNWvc_toOltyObjZdMqycqMcsz-&response=${recaptchaResponse}`;
    const recaptchaResult = await fetch(verifyRecaptchaUrl, { method: 'POST' });
    const recaptchaData = await recaptchaResult.json();

    if (!recaptchaData.success) {
      return res.status(401).json({ message: 'Vui lòng xác minh reCAPTCHA' });
    }
    
        if (!email || !password) {
          return res.status(400).json({ message: "Vui lòng điền email và mật khẩu!" });
        }
    
        const user = await RegisterSchema.findOne({ email });
    
        if (!user) {
          return res.status(401).json({ message: "Tài khoản hoặc mật khẩu không chính xác" });
        }
    
        if (user.loginAttempts >= 3) {
          return res.status(401).json({ message: "Tài khoản đã bị khóa vì thử đăng nhập sai quá nhiều lần. Vui lòng liên hệ quản trị viên Nguyễn Hoàng Long để được hỗ trợ" });
        }
    
        // const passwordGuesses = [ 'abcxys','hfduff', 'qwerty', 'letmein', 'Long@1234','Long@123'];
        // let isPasswordValid = false;
    
        // // Lặp qua danh sách các mật khẩu thử
        // for (const passwordGuess of passwordGuesses) {
        //   const isGuessValid = await bcrypt.compare(passwordGuess, user.password);
        //   if (isGuessValid) {
        //     isPasswordValid = true;
        //     break; // Thoát vòng lặp nếu tìm thấy mật khẩu đúng
        //   }
        // }

        const isPasswordValid = await bcrypt.compare(password, user.password);
    
        if (!isPasswordValid) {
          user.loginAttempts++;
          await user.save();
          // // if (user.loginAttempts >= 3) {
          // //   return res.status(401).json({ message: "Tài khoản đã bị khóa vì thử đăng nhập sai quá nhiều lần. Vui lòng liên hệ quản trị viên Nguyễn Hoàng Long để được hỗ trợ" });
          // // } else {
          // res.redirect("back");
          return res.json("Sai mật khẩu");
          // // // }
        }
    
        user.loginAttempts = 0;
        await user.save();
    
        const token = jwt.sign({ email: user.email }, 'secret-key', { expiresIn: '1h' });
    
        // Gui token ve cho client o cookie
        res.cookie('userId', user._id, { signed: true });
        res.cookie('jwt', token);
    
        res.redirect('/');
      } catch (error) {
        next(error);
      }
    }
    

    


    
    

    // async signin(req, res, next) {
    //   try {
    //     const { email, password } = req.body;
    
    //     if (!email || !password) {
    //       return res.status(400).json({ message: "Vui lòng điền email và mật khẩu!" });
    //     }
    
    //     const user = await RegisterSchema.findOne({ email });
    
    //     if (!user) {
    //       return res.status(401).json({ message: "Tài khoản hoặc mật khẩu không chính xác" });
    //     }
    
      
    
    //     const token = jwt.sign({ email: user.email, userId: user._id }, 'secret-key', { expiresIn: '1h' });

    
    //     // Gửi token về cho client trong cookie
    //     res.cookie('userId', user._id, { signed: true });
    //     res.cookie('jwt', token);
    
    //     res.redirect('/');
    //   } catch (error) {
    //     next(error);
    //   }
    // }
    
}

module.exports = new LoginController()