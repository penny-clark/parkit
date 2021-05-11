const express = require('express');
const router = express.Router();


//These routes are for the owner
module.exports = (db) => {

//get spots by user

router.get("/", (req, res) => {
  return db.query(`
  SELECT * FROM users;
  `)
    .then(data => {
      const spots = data.rows;
      res.json({ spots });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});
return router;
}