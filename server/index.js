const express = require('express');
const app = express();
const path = require('path');

const port = 3333;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));


app.listen(port, () => {
  console.log(`Server listening at localhost:${port}!`);
});