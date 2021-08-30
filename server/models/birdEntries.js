var db = require('../db');

module.exports = {
  createBird: function(req, res) {
    if (req.files) {
      const {birdImage} = req.files;
      birdImage.mv('./public/uploads/' + birdImage.name)
    }

    var body = req.body;

    var queryString = 'INSERT INTO user_birds (bird, city_sighted, state_sighted, notes, latitude, longitude, birdpic_url) VALUES (?, ?, ?, ?, ?, ?, ?)';
    var params = [body.bird, body.city_sighted, body.state_sighted, body.notes, body.latitude, body.longitude, body.birdpic_url];

    db.query(queryString, params, function(err, results, fields) {
      if (err) console.log(err)
      else (res.send())
    })
  },

  getEntries: function(req, res) {
    var queryString = 'SELECT * FROM user_birds';
    db.query(queryString, function(err, results, fields) {
      if (err) console.log(err)
      else (res.send(results));
    })
  }
}