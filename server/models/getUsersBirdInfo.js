var db = require('../db');

exports.getUsersBirdInfo = (req, res) => {
  let sql = `SELECT user_birds.bird, user_birds.birdpic_url, user_birds.notes, user_birds.city_sighted, user_birds.state_sighted
             FROM user_birds WHERE userID = ${req.params.userid};`;
  db.query(sql, (err, result) => {
    console.log('is query executing');
    if (err) {
      res.send(err);
    }
    console.log(result);
    res.send(result);
  })
}