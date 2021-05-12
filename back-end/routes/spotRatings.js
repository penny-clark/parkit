const express = require('express');
const router = express.Router();


module.exports = (db) => {
//for Renter

//post a new spot rating

  router.post("/", (req, res) => {
    return db.query(`
      INSERT INTO spot_ratings (user_id, spot_id, rating)
      VALUES ($1, $2, $3);
      `, [req.params.id, req.params.spot_id, req.params.rating])
      .then(rating => {
        res.json({ rating });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  return router;
}