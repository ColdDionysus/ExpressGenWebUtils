const express = require("express");
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

const PORT = process.env.PORT || 3600;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
