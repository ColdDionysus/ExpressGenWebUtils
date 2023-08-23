const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("index", { data: "Hello World" });
});

module.exports = router;
