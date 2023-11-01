const router = require("express").Router();
const user = require("../modules/user");

router.get("/", async function (req, res) {
  res.locals.title = "Registration form";

  res.render("register", { layout: "default" });
});


module.exports = router;