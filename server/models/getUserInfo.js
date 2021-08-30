// var db = require('../db');

// exports.getUserInfo = (req, res) => {
//   let sql = `SELECT user_profile.username, user_profile.profile_pic_url
//                FROM user_profile`;
//   db.query(sql, (err, result) => {
//     if (err) throw err;
//     res.send(result);
//   })
// }