var db = require('../db');

exports.updateBird = (req, res) => {
  let sql = `UPDATE user_birds
             SET bird = '${req.body.bird},
             notes = '${req.body.notes}',
             city_sighted = '${req.body.city_sighted}',
             state_sighted = '${req.body.state_sighted}'
             WHERE userID = '${req.body.userID}' and bird = '${req.body.bird}';`;
  db.query(sql, (err, result) => {
    if (err) console.log(err);
    res.send('Bird updated');
  })
            }