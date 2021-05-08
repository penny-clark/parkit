const express = require('express');
const router = express.Router();


module.exports = (db) => {
//for Renter

//post a new spot rating

router.post("/", (req, res) => {
  db.createSpotRating(params)
    .then(rating => {
      res.json({ rating });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

}