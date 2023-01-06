const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.listen(8080, (req, res) => {
  app.use(express.static("client/build"));
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
  console.log("server running ok...");
});
