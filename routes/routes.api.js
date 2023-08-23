const router = require("express").Router();
const qrRouter = require("../modules/qrcode/qr.api");

router.use("/qr", qrRouter);

module.exports = router;
