const router = require("express").Router();

const routes = {
  "/": require("./main.js"),
  "/api": require("./api.js"),
  "/login": require("./login.js"),
  "/logout": require("./logout.js"),
  "/register": require("./register.js")
}

Object.entries(routes).forEach(([path, route]) => {
  router.use(path, route);
});

module.exports = router;