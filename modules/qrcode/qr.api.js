const router = require("express").Router();

const qrController = require("./qr.controller");

router.get("/", (req, res) => {
  res.send("QR API is working");
});

router.post("/", async (req, res, next) => {
  try {
    console.log(req.body);
    const { name: qr } = req.body;
    const qrData = await qrController.createQr(qr);
    res.send(`<img src="${qrData}"></img>`);
  } catch (err) {
    next(e);
  }
});
module.exports = router;
