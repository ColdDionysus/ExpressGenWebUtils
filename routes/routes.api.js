const router = require("express").Router();
const qrRouter = require("../modules/qrcode/qr.api");

router.use("/qr", qrRouter);
router.use("/mail");

module.exports = router;
