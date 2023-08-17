const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("I am on routes Index.js");
});

router.post("/", (req, res) => {
  res.send("I am from post routers");
});

router.put("/", (req, res) => {
  res.send("Data updated");
});

router.delete("/", (req, res) => {
  res.send("Delete ");
});

module.exports = router;
