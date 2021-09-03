var db = require('../db');

exports.getUsersBirdInfo = (req, res) => {
  let sql = `SELECT *
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