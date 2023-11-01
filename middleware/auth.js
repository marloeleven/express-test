const userModule = require("../modules/user");

function getToken(req) {
  if (req.cookies.token) {
    return req.cookies.token;
  }

  if (req.headers.authorization) {
    return req.headers.authorization.split(" ")[1];
  }

  return null;
}

async function validate(req, res, next) {
  const token = getToken(req);

  const user = await userModule.validateToken(token);
  if (!!user) {
    res.locals.user = user;
    return next()
  }

  res.redirect("/login");
}

async function guest(req, res, next) {
  const token = getToken(req);

  const user = await userModule.validateToken(token);
  if (user) {
    res.locals.user = user;
    res.redirect("/");
    return;
  }
  
  return next()
}

module.exports = {
  validate,
  guest
}