function validate(req, res, next) {
  const { username, password } = req.body;
  console.log(username);
  if (username === undefined || username === "" || username.length > 20) {
    next("Username is null or too long!");
  }
  if (password === undefined || password === "" || password.length > 8) {
    next("password is null or too long!");
  }
  next();
}

module.exports = {
  validate,
};
