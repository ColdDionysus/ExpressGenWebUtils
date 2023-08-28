const router = require("express").Router();
const qrRouter = require("../modules/qrcode/qr.api");
const emailRouter = require("../modules/email/email.api");
router.use("/qr", qrRouter);
router.use("/send", emailRouter);

module.exports = router;
