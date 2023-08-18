const express = require("express");
const indexRouter = require("./routes/index");
const app = express();
app.use(express.json());
app.use("/", indexRouter);

const PORT = process.env.PORT || 3600;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
