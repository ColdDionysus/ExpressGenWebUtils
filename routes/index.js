const router = require("express").Router();
const QRCode = require("../modules/qrcode");
const currencyConverter = require("../modules/currency");
const pdfkit = require("../modules/pdfkit");

const fs = require("fs");

router.post("/qr", async (req, res) => {
  try {
    console.log(req.body);
    const { name: qr } = req.body;
    const qrData = await QRCode.toDataURL(qr);
    res.send(`<img src="${qrData}"></img>`);
  } catch (err) {
    console.log(err);
    res.send("Something went wrong");
  }
});

router.get("/currency", async (req, res) => {
  try {
    const toConvert = new currencyConverter();
    console.log(req.query);
    const { from, to, amount } = req.query;

    const converter = await toConvert
      .from(from)
      .to(to)
      .amount(parseInt(amount))
      .convert();

    res.send(
      `<h1>Currency from ${from} to ${to} for today rate is:  ${converter}</h1>`
    );
  } catch (err) {
    res.send("Something went wrong");
  }
});

router.get("/generate-pdf", (req, res) => {
  try {
    const document = new pdfkit();
    document.pipe(fs.createWriteStream("output.pdf"));
    const { q } = req.query;
    const addText = document.text(q);
    document.end();

    res.download("output.pdf");
  } catch (err) {
    res.send("Something went wrong");
  }
});

router.get("/convert-nepali", (req, res) => {
  const unicode = convertToUnicode("value");
  console.log(unicode);
});

module.exports = router;
