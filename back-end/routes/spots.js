const express = require('express');
const router = express.Router();


//These routes are for the owner
module.exports = (db) => {

//get all spots 
router.get("/spots", (request, response) => {
 return db.query(
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

// get spots by user id
// not sure if we can do the route like this, but it would be great if we can
router.get("spots/:user_id", (req, res) => {
  const id = req.params.user_id;
    return db.query(
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
      WHERE users.id = $1
      GROUP BY spots.id, users.id
      ORDER BY spots.id
    `, [id]
    ).then(({ rows: spots }) => {
      response.json(
        spots.reduce(
          (previous, current) => ({ ...previous, [current.id]: current }),
          {}
        )
      );
    });
  });

//post a new spot

  router.post("/", (req, res) => {
    return db.query(`
    INSERT INTO spots (user_id, streetaddress, city, province, country, postalcode, picture, price)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8);
    `, [req.params.id, req.params.street_address, req.params.city, req.params.province, req.params.country, req.params.postal_code, req.params.picture, req.params.price])
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

router.post("spots/:spot_id", (req, res) => {
  return db.query`
  UPDATE spots SET user_id = $1, streetaddress = $2, city = $3, province = $4, country = $5, postal_code = $6, picture = $7 WHERE id = $8
  `, [req.params.user_id, req.params.street_address, req.params.city, req.params.province, req.params.country, req.params.postal_code, req.params.picture, req.params.price, req.params.id]
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
router.delete("spots/:spot_id", (req, res) => {
  return db.query(`
  DELETE FROM spots where spot_id = $1;
  `, [req.params.id])
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
// I think we could do this with a filter in the front end instead
// router.get("/search/:city", (req, res) => {
//   db.getSpotsForSearch(city)
//     .then(spot => {
//       res.json({ spot });
//     })
//     .catch(err => {
//       res
//         .status(500)
//         .json({ error: err.message });
//     });
// });

return router;
}