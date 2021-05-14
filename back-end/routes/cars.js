const express = require('express');
const router = express.Router();
module.exports = (db) => {

// gets all the cars
router.get("/", (req, res) => {
  return db.query(`
  SELECT id, user_id, make, model, colour, plate_number FROM cars
  `)
  .then(({ rows: cars }) => {
    res.json(
      cars.reduce(
        (previous, current) => ({ ...previous, [current.id]: current }),
        {}
      )
    );
  });
});

// get a specific user's cars - moved to users route

// adds a new car
router.post("/", (req, res) => {
  console.log(req.body, "req body from add new car")
  return db.query(`
  INSERT INTO cars (user_id, make, model, colour, plate_number)
  VALUES ($1, $2, $3, $4, $5);
  `, [req.body.id, req.body.make, req.body.model, req.body.colour, req.body.plate_number])
    .then(car => {
      console.log(car, "car in the response")
      res.json({ car });
    })
    .catch(err => {
      console.log(err)
      res
        .status(500)
        .json({ error: err.message });
    });
});

router.delete("/:id", (req, res) => {
  return db.query(`
  DELETE FROM cars where id = $1;
  `, [req.params.id])
    .then( car => {
      res.json({ car });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

return router;
}