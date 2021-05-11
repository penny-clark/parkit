const express = require('express');
const router = express.Router();
// for Owner
module.exports = (db) => {

router.get("/bookings", (req, res) => {
  
})


 // get bookings - by spot id (when owner has more than a spot)

//get bookings - query function will match by spot id : for the owner
router.get("ownerreservations/:user_id", (req, res) => {
  db.getBookingsforOwner (req.params.user_id)
    .then(booking => {
      res.json({ booking });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

//get bookings - query function will match by car id for the renter
router.get("renterreservations/:user_id", (req, res) => {
  db.getBookingsforRenter (req.params.user_id)
    .then(booking => {
      res.json({ booking });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

//post a new booking

router.post("/", (req, res) => {
  db.createBooking(params)
    .then(booking => {
      res.json({ booking });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});


// for both types of users

// delete booking - by booking ids

router.delete("/:booking_id", (req, res) => {
  db.deleteBooking(params)
    .then( booking => {
      res.json({ booking });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

}
