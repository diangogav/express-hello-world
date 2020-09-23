const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.status(200).json("OK");
});

app.listen(80, () => {
  console.log("Server listen on port 80");
});