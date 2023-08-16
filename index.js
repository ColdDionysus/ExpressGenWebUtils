const express = require("express");

const app = express();

app.get("/:firstName/:lastName/:id", (req, res) => {
  const { firstName, lastName, id } = req.params;
  res.send(`I am ${firstName} ${lastName}, ID: ${id}`);
});

app.post("/", (req, res) => {});

app.put("/", (req, res) => {});

app.delete("/", (req, res) => {});

const PORT = process.env.PORT || 3500;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
