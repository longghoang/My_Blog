module.exports = function sessionMiddleware(req, res, next) {
  if (req.signedCookies.userId) {
    return res.status(401).json({ message: "Bạn đã đăng nhập rồi" });
  }

  next();
};
