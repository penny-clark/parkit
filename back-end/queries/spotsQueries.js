const db = require('./db');

//query funtions for spots related task 

//OWNER FUNCTION 
//register a spot
//WF Slide 13 spot registration form:
//INSERT info coming in for put request (user_id, street address, city, provice, country, postal code)

const createSpot = (userID, streetaddress, city, province, country, postalcode) => {
  return db.query(`
  INSERT INTO bookings (userID, streetaddress, city, province, country, postalcode)
  VALUES ($1, $2, $3, $4, $5, $6);
  `, [userID, streetaddress, city, province, country, postalcode])
    .then(res => {
      return res.rows;
    })
    .catch(error => console.log(error));
};

module.exports.createSpot = createSpot;

//find spots by user id (for owner dashboard)
//WF slide 14 my spots listing: 
//QUERY for spot id, address, price per hour, image

const getSpotsfoDashboard = (id) => {
  return db.query(`
  //QUERY GOES HERE
  `, [id])
    .then(res => {
      return res.rows;
    })
    .catch(error => console.log(error));
};

module.exports.getSpotsfoDashboard = getSpotsfoDashboard;

//edit a spot
//UPDATE  info coming in for put request (user_id, street address, city, provice, country, postal code)

const updateSpot = (params) => {
  return db.query(`
  DELETe spot WIRTE QUERY;
  `, [params])
    .then(res => {
      return res.rows;
    })
    .catch(error => console.log(error));
};

module.exports.updateSpot = updateSpot;

//RENTER FUNCTION
//find spots based on map search (for homepage)
//QUERY spots BY first two letter of postal code - SELECT address price, rating, all owner user details (id, name, email, avatar), rating

const getSpotsfoDashboard = (postalcode) => {
  return db.query(`
  //QUERY GOES HERE
  `, [postalcode])
    .then(res => {
      return res.rows;
    })
    .catch(error => console.log(error));
};

module.exports.getSpotsfoDashboard = getSpotsfoDashboard;