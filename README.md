# My_Blog
project_Nodejs
<<<<<<< HEAD


async signin(req, res, next) {
      try {
        const { email, password } = req.body;
  
        if (!email || !password) {
          return res.status(400).json({ message: "Vui lòng điền email và mật khẩu!" });
        }
  
        const user = await RegisterSchema.findOne({ email });
  
        if (!user) {
          return res.status(401).json({ message: "Tài khoản hoặc mật khẩu không chính xác" });
        }
  
        const passwordGuesses = [ 'abcxys','12345678', 'qwerty', 'letmein'];
        let isPasswordValid = false;
  
        // Lặp qua danh sách các mật khẩu thử
        for (const passwordGuess of passwordGuesses) {
          const isGuessValid = await bcrypt.compare(passwordGuess, user.password);
          if (isGuessValid) {
            isPasswordValid = true;
            break; // Thoát vòng lặp nếu tìm thấy mật khẩu đúng
          }
        }
  
        user.loginAttempts = 0;
        await user.save();
  
        const token = jwt.sign({ email: user.email }, 'secret-key', { expiresIn: '1h' });
  
        // Gui token ve cho client o cookie
        res.cookie('userId', user._id, { signed: true });
        res.cookie('jwt', token);
  
        // Xử lý khi mật khẩu sai
        if (!isPasswordValid) {
          // Hiển thị thông báo "Sai mật khẩu" trên giao diện
          return res.render('logins/login', { message: "Sai mật khẩu" });
        }
  
        res.redirect('/');
      } catch (error) {
        next(error);
      }
    }
=======
>>>>>>> 60b9931ed9710200bb01b2b2133456de2f2162cb
