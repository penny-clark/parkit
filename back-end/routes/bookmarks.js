const express = require('express');
const router = express.Router();


module.exports = (db) => {

  router.get("/", (request, response) => {
    return db.query(
       `
       SELECT
         bookmarked_spots.id as bookmark_id,
         bookmarked_spots.user_id as renter_id,
         spots.id as id,
         json_build_object('user_id', users.id, 'first_name', users.first_name, 'last_name', users.last_name, 'owner_email', users.email, 'avatar', users.avatar) 
         AS owner,
         spots.street_address,
         spots.city,
         spots.province,
         spots.country,
         spots.price,
         spots.picture,
         spots.postal_code,
         CASE WHEN AVG(spot_ratings.rating) IS NULL
         THEN NULL
         ELSE ROUND(AVG(spot_ratings.rating))
         END AS rating
       FROM bookmarked_spots
       LEFT JOIN spots on spots.id = bookmarked_spots.spot_id
       LEFT JOIN users ON users.id = spots.user_id
       LEFT OUTER JOIN spot_ratings ON spot_ratings.spot_id = spots.id
       GROUP BY bookmarked_spots.id, spots.id, users.id
     `
     ).then(({ rows: bookmarks }) => {
       response.json(
         bookmarks
       );
     });
   });

  //for renter to bookmark a favourite spot
  router.post("/", (req, res) => {
    console.log(req.body, "add bookmark in route")
    return db.query(`
      INSERT INTO bookmarked_spots (user_id, spot_id)
      VALUES ($1, $2);
      `, [req.body.user_id, req.body.spot_id])
      .then(bookmark => {
        res.json({ bookmark });
      })
      .catch(err => {
        console.log(err, "add new bookmark")
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  return router;
}