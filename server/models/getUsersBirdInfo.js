var db = require('../db');

exports.getUsersBirdInfo = (req, res) => {
  let sql = `SELECT user_birds.bird, user_birds.birdpic_url, user_birds.notes, user_birds.city_sighted, user_birds.state_sighted
             FROM user_birds WHERE userID = ${req.path.userid}`;
  db.query(sql, (err, result) => {
    if (err) console.log(err);
    res.send(result);
  })
}