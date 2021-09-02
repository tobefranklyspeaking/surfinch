const express = require('express');
const app = express();
const path = require('path');

const { getUsersBirdInfo } = require('./models/getUsersBirdInfo');
const { postNewUser } = require('./models/postNewUser');
const { postUserBird } = require('./models/postUserBird');
const fileUpload = require('express-fileupload');
const { updateBird } = require('./models/updateBird.js')
const { getUserInfo } = require('./models/getUserInfo');
const { createBird, getEntries } = require('./models/birdEntries');
const { getStats } = require('./models/getStats.js');

const port = 3333;
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use(fileUpload({
  createParentPath: true
}));

app.use(express.static('public'));

// insert a new user into the table
app.post('/newUser', postNewUser);

// get a particular user's profile info
app.get('/user/:email', getUserInfo);

// get stats from the site
app.get('/stats', getStats);

//get users saved birds info
app.get('/userbirds/:userid', getUsersBirdInfo);

//post a bird by user
app.post('/bird', postUserBird);

app.put('./updateBird', updateBird);

app.post('/createBird', createBird);
app.get('/entries/:userid', getEntries);




app.listen(port, () => {
  console.log(`Server listening at localhost:${port}!`);
});