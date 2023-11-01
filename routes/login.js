const router = require("express").Router();
const user = require("../modules/user");
const authMiddleware = require("../middleware/auth");

router.get("/", authMiddleware.guest, async function (req, res) {
  res.locals.title = "Login";

  res.render("login", { layout: "default" });
});

router.post('/', async function (req, res) {
  const { username, password } = req.body;

  const token = await user.login(username, password);

  if (token) {
    res.cookie("token", token, { httpOnly: true, maxAge: 1000 * 60 * 60 * 24 * 30 });
    res.status(200).send({ result: "success" });
    return;
  }

  res.status(401).json({ errors: ["Invalid username or password"] });
});

module.exports = router;