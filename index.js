const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 5000;
const app = express();

// Default, you're always busy...
let busy = true;

app.get("/start", (req, res) => {
  busy = true;
  res.send("You are busy now");
});
app.get("/end", (req, res) => {
  busy = false;
  res.send("You are free now");
});

app
  .use(express.static(path.join(__dirname, "public")))
  .set("views", path.join(__dirname, "views"))
  .set("view engine", "ejs")
  .get("/", (req, res) => res.render("pages/index", { busy }))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
