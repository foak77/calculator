const express = require("express");
const app = express();

app.use(express.static(`${__dirname}/`));

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.listen(3018, () => {
  console.log(`Server Calculator on 3018`);
});
