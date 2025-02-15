import express from "express";
const app = express();
const port = 3000;

app.get("/api/", (req, res) => {
  const { address } = req.query;
  res.send("you sumbmitted: " + address);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
