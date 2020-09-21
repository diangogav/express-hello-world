const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.status(200).json("OK");
});

app.listen(3000, () => {
  console.log("Server listen on port 3000");
});