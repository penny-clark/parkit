const express = require('express');
const router = express.Router();


//These routes are for the owner
module.exports = (db) => {

//get spots by user

router.get("/:user_id", (req, res) => {
  db.getSpotsforDashboard (req.params.user_id)
    .then(spot => {
      res.json({ spot });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

//post a new spot

  router.post("/", (req, res) => {
    db.createSpot(params)
      .then(spot => {
        res.json({ spot });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

//post an edit to a spot

router.post("/:spot_id", (req, res) => {
  db.updateSpot(params)
    .then(spot => {
      res.json({ spot });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

//delete a spot
//where should this route to? 
router.delete("/:spot_id", (req, res) => {
  db.deleteSpot(params)
    .then(spot => {
      res.json({ spot });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

//Renter route
//not sure what route to put
router.get("/spots", (req, res) => {
  db.getSpotsforSearch(postalcode)
    .then(spot => {
      res.json({ spot });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});


}