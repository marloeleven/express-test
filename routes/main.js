const router = require("express").Router();
const authMiddleware = require("../middleware/auth.js");

const user = require("../modules/user");

router.get("/",  authMiddleware.validate, async function (req, res) {
  res.locals.title = "Home!";

  res.render("home");
});

module.exports = router;