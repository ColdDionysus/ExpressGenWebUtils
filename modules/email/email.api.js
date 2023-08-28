const router = require("express").Router();
const sendEmail = require("../../service/mailer");
router.get("/", (req, res) => {
  res.send("Api is working");
});

router.post("/", async (req, res, next) => {
  try {
    console.log(JSON.stringify(req.body));
    const message = JSON.stringify(req.body);
    const from = "gautampukar01@gmail.com";
    const to = "gautampukar01@gmail.com";
    const emailSender = await sendEmail.sendMessage({ from, to, message });
    res.send(emailSender);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
