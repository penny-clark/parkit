const express = require('express');
const router = express.Router();


module.exports = (db) => {

  //for renter to bookmark a favourite spot
  router.post("/", (req, res) => {
    return db.query(`
      INSERT INTO bookmarked_spots (user_id, spot_id)
      VALUES ($1, $2);
      `, [req.params.id, req.params.spot_id])
      .then(bookmark => {
        res.json({ bookmark });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  return router;
}