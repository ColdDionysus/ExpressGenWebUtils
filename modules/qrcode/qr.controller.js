const qrCode = require("qrcode");

const createQr = async (qr) => {
  if (!qr) throw new Error("Name Parameter is Required");
  const qrcode = await qrCode.toDataURL(qr);
  return qrcode;
};

module.exports = { createQr };
