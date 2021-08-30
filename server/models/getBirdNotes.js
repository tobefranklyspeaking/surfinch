var db = require('../db');

exports.getBirdNotes = (req, res) => {
  const user = req.params.userID;
  let sql = `SELECT user_birds.birdpic_url, user_birds.notes, user_birds.city_sighted, user_birds.longitude, user_birds.latitude FROM user_birds WHERE userID = ${user}`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  })
}


