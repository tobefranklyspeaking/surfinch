var db = require('../db');

exports.postNewUser = (req, res) => {
  console.log('SIGNUP!', req.body);
  let sql = `INSERT INTO user_profile (username, email, profile_pic_url)
               VALUES ('${req.body.name}', '${req.body.email}', '${req.body.pic}')`;
  db.query(sql, (err, result) => {
    console.log('hi there', result);
    if (err) console.log(err);
    res.send(result);
  })
}