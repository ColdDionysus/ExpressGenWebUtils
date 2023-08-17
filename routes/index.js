const router = require("express").Router();
const QRCode = require("../modules/qrcode");
const currencyConverter = require("../modules/currency");
const pdfkit = require("../modules/pdfkit");
const fs = require("fs");

router.get("/qr", async (req, res) => {
  const { qr } = req.query;
  const qrData = await QRCode.toDataURL(qr);
  res.send(`<img src="${qrData}"></img>`);
});

router.get("/currency", async (req, res) => {
  const toConvert = new currencyConverter();
  console.log(req.query);
  const { from, to, amount } = req.query;

  const converter = await toConvert
    .from(from)
    .to(to)
    .amount(parseInt(amount))
    .convert();

  res.send(`<h1>The currency converted is ${converter}</h1>`);
});

router.get("/generate-pdf", (req, res) => {
  const document = new pdfkit();
  document.pipe(fs.createWriteStream("output.pdf"));
  const { q } = req.query;
  const addText = document.text(q);
  document.end();

  res.download("output.pdf");
});

module.exports = router;
