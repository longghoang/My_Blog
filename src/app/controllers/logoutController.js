
class LogoutController {
<<<<<<< HEAD
  async logout(req, res, next) {
    req.session.destroy(err => {
      if (err) {
        console.error(err);
      }
      res.clearCookie("jwt");
      res.clearCookie('userId', { signed: true });
      res.redirect('/login'); 
    });
  }
}

module.exports = new LogoutController();

=======
    async logout(req, res, next) {
      res.clearCookie("jwt");
      res.redirect('/login')
    }


  
}

module.exports = new LogoutController()
>>>>>>> 60b9931ed9710200bb01b2b2133456de2f2162cb
