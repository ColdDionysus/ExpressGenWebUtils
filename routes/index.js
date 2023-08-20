const router = require("express").Router();
const apiRouter = require("./routes.api");

router.use("/api/v1", apiRouter);
// router.get("/currency", async (req, res) => {
//   try {
//     const toConvert = new currencyConverter();
//     console.log(req.query);
//     const { from, to, amount } = req.query;

//     const converter = await toConvert
//       .from(from)
//       .to(to)
//       .amount(parseInt(amount))
//       .convert();

//     res.send(
//       `<h1>Currency from ${from} to ${to} for today rate is:  ${converter}</h1>`
//     );
//   } catch (err) {
//     res.send("Something went wrong");
//   }
// });

// router.get("/generate-pdf", (req, res) => {
//   try {
//     const document = new pdfkit();
//     document.pipe(fs.createWriteStream("output.pdf"));
//     const { q } = req.query;
//     const addText = document.text(q);
//     document.end();

//     res.download("output.pdf");
//   } catch (err) {
//     res.send("Something went wrong");
//   }
// });

module.exports = router;
