
class LogoutController {
    async logout(req, res, next) {
      res.clearCookie("jwt");
      res.redirect('/login')
    }


  
}

module.exports = new LogoutController()