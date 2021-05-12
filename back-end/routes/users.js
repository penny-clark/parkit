const express = require('express');
const router = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    const id = req.params.id;
    return db.query(`
    SELECT id, first_name, last_name, email, avatar
    FROM
    users
    `)
      .then(data => {
        const users = data.rows;
        res.json( users );
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });


  //get spots for owner dashboard
  router.get("/spots/:id/", (req, res) => {
    const id = req.params.id;
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
      ).then(data => {
        const spots = data.rows;
        res.json({ spots });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
    });

    //gets all bookings for a renter
    router.get("/renterbookings/:id", (req, res) => {
      const id = req.params.id
      return db.query(
        `
        SELECT
          bookings.id,
          bookings.car_id,
          cars.user_id as renter_id,
          bookings.start_date_time,
          bookings.end_date_time,
          json_build_object('spot_id', spots.id, 'street_address', spots.street_address, 'city', spots.city, 'province', spots.province, 'postal_code', spots.postal_code, 'price', spots.price, 'picture', spots.picture) 
          AS spot,
          json_build_object('user_id', users.id, 'first_name', users.first_name, 'last_name', users.last_name, 'owner_email', users.email, 'avatar', users.avatar) 
          AS owner,
          CASE WHEN AVG(spot_ratings.rating) IS NULL
          THEN NULL
          ELSE AVG(spot_ratings.rating)
          END AS rating
        FROM bookings
        LEFT JOIN spots ON spots.id = bookings.spot_id
        LEFT JOIN users ON users.id = spots.user_id
        LEFT JOIN cars ON bookings.car_id = cars.id	
        LEFT OUTER JOIN spot_ratings ON spot_ratings.spot_id = spots.id 
        WHERE cars.user_id = $1
        GROUP BY bookings.id, cars.id, spots.id, users.id
        ORDER BY bookings.start_date_time DESC
      `, [id]
      ).then(({ rows: bookings }) => {
        res.json(
          bookings.reduce(
            (previous, current) => ({ ...previous, [current.id]: current }),
            {}
          )
        );
      });
    });

    router.get("/owner/:id", (req, res) => {
      (console.log (req.params.id))
      return db.query(
        `
        SELECT
          bookings.id,
          bookings.car_id,
          spots.user_id as owner_id,
          bookings.start_date_time,
          bookings.end_date_time,
          json_build_object('car_id', cars.id, 'car_make', cars.make, 'model', cars.model, 'colour', cars.colour, 'plate_number', cars.plate_number, 'rating', AVG(renter_ratings.rating)) 
          AS car,
          json_build_object('user_id', users.id, 'first_name', users.first_name, 'last_name', users.last_name, 'owner_email', users.email, 'avatar', users.avatar) 
          AS renter
        FROM bookings
        LEFT JOIN cars ON cars.id = bookings.car_id
        LEFT JOIN users ON users.id = cars.user_id
        LEFT JOIN spots ON bookings.spot_id = spots.id	
        LEFT OUTER JOIN renter_ratings ON renter_ratings.renter_id = users.id
        WHERE spots.user_id = $1
        GROUP BY bookings.id, cars.id, spots.id, users.id
        ORDER BY spots.id, bookings.start_date_time
      `, [req.params.id]
      ).then(({ rows: bookings }) => {
        res.json(
          bookings.reduce(
            (previous, current) => ({ ...previous, [current.id]: current }),
            {}
          )
        );
      });
    });

    //get all of a renter's cars
    router.get("/cars/:id", (req, res) => {
      const id = req.params.id;
      return db.query(`
      SELECT id, user_id, make, model, colour, plate_number FROM cars WHERE user_id = $1
      `, [id])
        .then(data => {
          const cars = data.rows;
          res.json({ cars });
        })
        .catch(err => {
          res
            .status(500)
            .json({ error: err.message });
        });
    });

     //get all of a renter's bookmarked spots
     router.get("/bookmarks/:id", (req, res) => {
      const id = req.params.id;
      return db.query(`
      SELECT
      bookmarked_spots.id as bookmark_id,
      bookmarked_so
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
    FROM bookmarked_spots
    LEFT JOIN spots on bookmarked_spots.spot_id = spots.id
    LEFT JOIN users ON users.id = spots.user_id
    LEFT OUTER JOIN spot_ratings ON spot_ratings.spot_id = spots.id
    WHERE bookmarked_spots.user_id = $1  
    GROUP BY bookmarked_spots.id, spots.id, users.id
    ORDER BY spots.id
      `, [id])
        .then(data => {
          const cars = data.rows;
          res.json({ cars });
        })
        .catch(err => {
          res
            .status(500)
            .json({ error: err.message });
        });
    });

  return router;
}

