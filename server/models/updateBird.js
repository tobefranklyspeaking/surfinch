var db = require('../db');

exports.updateBird = (req, res) => {

  let body = req.body;

  let sql = 'UPDATE user_birds SET bird = ?, street_sighted = ?, city_sighted = ?, state_sighted = ?, notes = ? WHERE id = ?'
  let params = [body.bird, body.street_sighted, body.city_sighted, body.state_sighted, body.notes, body.id];
  db.query(sql, params, (err, result) => {
    if (err) console.log(err);
    res.send('bird updated');
  })
}