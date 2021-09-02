exports.postNewUser = (req, res) => {
  console.log('SIGNUP!', req.body);
  let sql = `INSERT INTO user_profile (username, profile_pic_url)
               VALUES ('${req.body.name}', '${req.body.pic}')`;
  db.query(sql, (err, result) => {
    if (err) console.log(err);
    res.send('Welcome!', result);
  })
}