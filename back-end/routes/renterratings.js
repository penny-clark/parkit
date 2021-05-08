const express = require('express');
const router = express.Router();


module.exports = (db) => {

  //for Owner
  //post a new rating

  router.post("/", (req, res) => {
    db.createRenterRating(params)
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
