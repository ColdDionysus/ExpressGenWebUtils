const express = require("express");
const indexRouter = require("./routes/index");
const app = express();

app.use("/", indexRouter);

const PORT = process.env.PORT || 3500;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
