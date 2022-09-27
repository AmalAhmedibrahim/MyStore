const express = require("express");
const app = express();

app.use(express.static(__dirname + "/dist/MyStore"));
app.get("/*", (req, res) => {
  res.sendFile(__dirname + "/dist/MyStore/index.html");
});

app.listen(process.env.PORT || 8080);
