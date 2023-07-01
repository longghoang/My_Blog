
class LogoutController {
    async logout(req, res, next) {
      res.clearCookie("jwt");
      res.clearCookie('userId', { signed: true });
      res.redirect('/login')
    }


  
}

module.exports = new LogoutController()