const db = require('./db');
//Query functions for bookings tasks

//RENTER FUNCTION

//make a new booking
//WF Slide 8
//use user id to get car id (maybe need to write a query to get this)
//INSERT starttime, endtime, spot_id, car_id)
const createBooking = (spotID, carID, startTime, endTime) => {
  return db.query(`
  INSERT INTO bookings (spotID, carID, startTime, endTime)
  VALUES ($1, $2, $3, $4);
  `, [spotID, carID, startTime, endTime])
    .then(res => {
      return res.rows;
    })
    .catch(error => console.log(error));
};

module.exports.createBooking = createBooking;

//find bookings for renter dashboard
//WF Slide 10
//QUERY use user id to find car id to get bookings based on car id return address, start date time end date time, owner email

const getBookingsforRenter = (id) => {
  return db.query(`
  //QUERY GOES HERE
  `, [id])
    .then(res => {
      return res.rows;
    })
    .catch(error => console.log(error));
};

module.exports.getBookingsforRenter = getBookingsforRenter;


//OWNER FUNCTIONS

//find bookings for owner dashboard
//WF Slide 11
//QUERY use owner id to find spot id to find bookings - return booking id, spot address, start date time, end date time, renter car info, renter info, renter rating

const getBookingsforOwner = (id) => {
  return db.query(`
  //QUERY GOES HERE
  `, [id])
    .then(res => {
      return res.rows;
    })
    .catch(error => console.log(error));
};

module.exports.getBookingsforOwner = getBookingsforOwner;

//BOTH

//delete booking by id
const deleteBooking = (params) => {
  return db.query(`
  DELETE booking WRITE QUERY;
  `, [params])
    .then(res => {
      return res.rows;
    })
    .catch(error => console.log(error));
};
module.exports.deleteBooking = deleteBooking;