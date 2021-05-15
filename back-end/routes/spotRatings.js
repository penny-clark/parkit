const express = require('express');
const router = express.Router();


module.exports = (db) => {
//for Renter

router.get("/", (request, response) => {
  return db.query(
     `
     SELECT
       id, user_id, spot_id, rating
       FROM spot_ratings
   `
   ).then(({ rows: spotratings }) => {
     response.json(
       spotratings
     );
   });
 });

//post a new spot rating

  router.post("/", (req, res) => {
    console.log(req.body, "newspotrating info")
    return db.query(`
      INSERT INTO spot_ratings (user_id, spot_id, rating)
      VALUES ($1, $2, $3);
      `, [req.body.user_id, req.body.spot_id, req.body.rating])
      .then(rating => {
        res.json({ rating });
      })
      .catch(err => {
        console.log(err, "spot ratings error")
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  return router;
}