const express = require('express');
const app = express();
const path = require('path');
const fileUpload = require('express-fileupload');

const { getUserInfo } = require('./models/getUserInfo');
const { createBird } = require('./models/createBird');

const port = 3333;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload({
  createParentPath: true
}));

app.use(express.static('public'));

//get a particular user's profile info
app.get('/user/:id', getUserInfo);

app.post('/createBird', createBird);

app.listen(port, () => {
  console.log(`Server listening at localhost:${port}!`);
});