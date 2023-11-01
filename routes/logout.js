const router = require("express").Router();

router.get('/', async function (req, res) {
  res.clearCookie("token");
  res.redirect("/login");
});

module.exports = router;