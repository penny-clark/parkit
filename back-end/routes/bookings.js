const express = require('express');
const router = express.Router();
// for Owner
module.exports = (db) => {

  router.get("/", (req, res) => {
    return db.query(
      `
      SELECT
        bookings.id,
        bookings.spot_id,
        bookings.car_id,
        bookings.start_date_time,
        bookings.end_date_time,
        bookings.start_string,
        bookings.end_string
        FROM bookings
    `
    ).then(({ rows: bookings }) => {
      res.json(
        bookings.reduce(
          (previous, current) => ({ ...previous, [current.id]: current }),
          {}
        )
      );
    });
  });

//gets all bookings with renter related info - orders from future to past dates

router.get("/renter", (req, res) => {
  return db.query(
    `
    SELECT
      bookings.id,
      bookings.car_id,
      cars.user_id as renter_id,
      bookings.start_date_time,
      bookings.end_date_time,
      bookings.start_string,
      bookings.end_string,
      json_build_object('spot_id', spots.id, 'street_address', spots.street_address, 'city', spots.city, 'province', spots.province, 'postal_code', spots.postal_code, 'price', spots.price, 'picture', spots.picture) 
      AS spot,
      json_build_object('user_id', users.id, 'first_name', users.first_name, 'last_name', users.last_name, 'owner_email', users.email, 'avatar', users.avatar) 
      AS owner,
      CASE WHEN AVG(spot_ratings.rating) IS NULL
      THEN NULL
      ELSE ROUND(AVG(spot_ratings.rating))
      END AS rating
    FROM bookings
    LEFT JOIN spots ON spots.id = bookings.spot_id
    LEFT JOIN users ON users.id = spots.user_id
    LEFT JOIN cars ON bookings.car_id = cars.id	
    LEFT OUTER JOIN spot_ratings ON spot_ratings.spot_id = spots.id
    GROUP BY bookings.id, cars.id, spots.id, users.id
    ORDER BY bookings.start_date_time DESC
  `
  ).then(({ rows: bookings }) => {
    res.json(
      bookings.reduce(
        (previous, current) => ({ ...previous, [current.id]: current }),
        {}
      )
    );
  });
});


//gets all the bookigns with info relevant to the owner
router.get("/owner", (req, res) => {
  return db.query(
    `
    SELECT
      bookings.id,
      bookings.car_id,
      spots.id as spot_id,
      spots.user_id as owner_id,
      bookings.start_date_time,
      bookings.end_date_time,
      bookings.start_string,
      bookings.end_string,
      json_build_object('car_id', cars.id, 'car_make', cars.make, 'model', cars.model, 'colour', cars.colour, 'plate_number', cars.plate_number, 'rating', ROUND(AVG(renter_ratings.rating))) 
      AS car,
      json_build_object('renter_id', users.id, 'first_name', users.first_name, 'last_name', users.last_name, 'renter_email', users.email, 'avatar', users.avatar) 
      AS renter
    FROM bookings
    LEFT JOIN cars ON cars.id = bookings.car_id
    LEFT JOIN users ON users.id = cars.user_id
    LEFT JOIN spots ON bookings.spot_id = spots.id
    LEFT OUTER JOIN renter_ratings ON renter_ratings.renter_id = users.id
    GROUP BY bookings.id, cars.id, spots.id, users.id
    ORDER BY bookings.start_date_time
  `
  ).then(({ rows: bookings }) => {
    res.json(
      bookings.reduce(
        (previous, current) => ({ ...previous, [current.id]: current }),
        {}
      )
    );
  });
});

// gets all bookings for an owner's spots - moved to users route


//post a new booking (for renters)

router.post("/", (req, res) => {
  return db.query(`
  INSERT INTO bookings (car_id, spot_id, start_date_time, end_date_time, start_string, end_string)
  VALUES ($1, $2, $3, $4, $5, $6);
  `, [req.body.car_id, req.body.spot_id, req.body.start_datetime, req.body.end_datetime, req.body.start_string, req.body.end_string])
    .then(booking => {
      res.json({ booking });
    })
    .catch(err => {
      console.log(err)
      res
        .status(500)
        .json({ error: err.message });
    });
});


// for both types of users

// delete booking - by booking ids

router.delete("/:id", (req, res) => {
  return db.query(`
  DELETE FROM bookings where id = $1;
  `, [req.params.id])
    .then( booking => {
        res.json({ booking });
    })
    .catch(err => {
      console.log(err)
      res
        .status(500)
        .json({ error: err.message });
    });
});

return router;
}
