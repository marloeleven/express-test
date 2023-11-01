const router = require("express").Router();
const user = require("../modules/user");

router.post('/username', async function (req, res) {
  const isUnique = user.isUsernameUnique(req.body.username)

  res.json({ exists: !isUnique });
});

module.exports = router;