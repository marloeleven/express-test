const router = require("express").Router();

const loginRoutes = require("./login.js")
const logoutRoutes = require("./logout.js")
const registerRoutes = require("./register.js")
const mainRoutes = require("./main.js")

const routes = {
  "/": mainRoutes,
  "/login": loginRoutes,
  "/logout": logoutRoutes,
  "/register": registerRoutes
}

Object.entries(routes).forEach(([path, route]) => {
  router.use(path, route);
});

module.exports = router;