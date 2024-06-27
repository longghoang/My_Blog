const jwt = require('jsonwebtoken');


module.exports = function authenticateToken(req, res, next) {
  const token = req.cookies.jwt;

<<<<<<< HEAD
  if(token) {
    return res.json('Bạn đã đăng nhập rồi')
  }
  // if (!token) {
  //   return res.status(401).json({ message: "Bạn chưa đăng nhập" });
  // }

  // jwt.verify(token, 'secret-key', (err, user) => {
  //   if (err) {
  //     return res.status(403).json({ message: "Forbidden" });
  //   }

  //   req.user = user;

  next();
  // });
=======
  if (!token) {
    return res.status(401).json({ message: "Bạn phải đăng nhập đã chứ" });
  }

  jwt.verify(token, 'secret-key', (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Đã đăng nhập đâu" });
    }

    req.user = user;

    next();
  });
>>>>>>> 60b9931ed9710200bb01b2b2133456de2f2162cb
}



<<<<<<< HEAD

=======
>>>>>>> 60b9931ed9710200bb01b2b2133456de2f2162cb
 


 


