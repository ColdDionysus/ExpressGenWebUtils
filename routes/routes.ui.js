const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("index", { data: "Hello World" });
});
router.get("/about", (req, res) => {
  res.render("about", { data: "Hello World" });
});

router.get("/blog", (req, res) => {
  res.render("blog", { data: "Hello World" });
});

router.get("/contact", (req, res) => {
  res.render("contact", { data: "Hello World" });
});

router.get("/furniture", (req, res) => {
  res.render("furniture", { data: "Hello World" });
});

module.exports = router;
