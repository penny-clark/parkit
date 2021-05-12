const express = require('express');
const router = express.Router();


module.exports = (db) => {

  //for Owner
  //post a new rating
  router.post("/", (req, res) => {
    return db.query(`
      INSERT INTO renter_ratings (owner_id, renter_id, rating)
      VALUES ($1, $2, $3);
      `, [req.params.id, req.params.renter_id, req.params.rating])
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
