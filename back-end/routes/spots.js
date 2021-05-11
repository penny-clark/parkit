const express = require('express');
const router = express.Router();


//These routes are for the owner
module.exports = (db) => {

//get all spots 
router.get("/spots", (request, response) => {
db.query(
  `
  SELECT
    spots.id,
    json_build_object('user_id', users.id, 'first_name', users.first_name, 'last_name', users.last_name, 'owner_email', users.email, 'avatar', users.avatar) 
    AS owner,
    spots.street_address,
    spots.city,
    spots.province,
    spots.country,
    spots.price,
    spots.picture,
    CASE WHEN AVG(spot_ratings.rating) IS NULL
    THEN NULL
    ELSE AVG(spot_ratings.rating)
    END AS rating
  FROM spots
  LEFT JOIN users ON users.id = spots.user_id
  LEFT OUTER JOIN spot_ratings ON spot_ratings.spot_id = spots.id
  GROUP BY spots.id, users.id
  ORDER BY spots.id
`
).then(({ rows: spots }) => {
  response.json(
    spots.reduce(
      (previous, current) => ({ ...previous, [current.id]: current }),
      {}
    )
  );
});
});

// get spots by user

router.get("spots/:user_id", (req, res) => {
  db.getSpotsForDashboard (req.params.user_id)
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

router.post("myspots/:spot_id", (req, res) => {
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

//Renter route - brings back spots matching search criteria
//not sure what route to put
router.get("/search/:city", (req, res) => {
  db.getSpotsForSearch(city)
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