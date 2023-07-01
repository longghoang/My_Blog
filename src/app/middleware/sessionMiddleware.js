// Middleware session
const sessionMiddleware = (req, res, next) => {
    // Kiểm tra xem session đã tồn tại hay chưa
    if (!req.session) {
      // Nếu chưa tồn tại, khởi tạo session
      req.session = {};
    }
    next();
  };
  
  module.exports = sessionMiddleware;
  