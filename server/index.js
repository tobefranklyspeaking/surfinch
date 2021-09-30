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
const { getSiteRankings } = require('./models/getSiteRankings.js');
const { incrementCount } = require('./models/incrementCount');

const port = 3333;

app.use(express.json());
app.use(fileUpload({
  createParentPath: true
}));
app.use(express.static('public'));

// get a particular user's profile info
app.get('/user/:email', getUserInfo);

// insert a new user into the table
app.post('/newUser', postNewUser);

// get stats from the site
app.get('/stats/:username', getStats);
app.get('/rankings', getSiteRankings);

//get users saved birds info
app.get('/userbirds/:userid', getUsersBirdInfo);

//post a bird by user
app.post('/bird', postUserBird);

// increment the login and count for a user
app.put('/incrementCount', incrementCount);

// SQL database manipulation
app.put('/updateBird', updateBird);
app.post('/createBird', createBird);
app.get('/entries/:userid', getEntries);


app.listen(port, () => {
  console.log(`Server listening at localhost:${port}!`);
});