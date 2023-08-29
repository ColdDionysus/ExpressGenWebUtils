const express = require("express");
require("dotenv").config();
const indexRouter = require("./routes/index");
const app = express();

app.use(express.json());
app.use("/", indexRouter);

app.use((err, req, res, next) => {
  err =
    process.env.NODE_ENV === "production"
      ? "Something went wrong"
      : err.toString();
  res.status(500).send(err);
});
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
