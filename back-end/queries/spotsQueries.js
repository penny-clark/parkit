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

const getSpotsforDashboard = (id) => {
  return db.query(`
  //QUERY GOES HERE
  `, [id])
    .then(res => {
      return res.rows;
    })
    .catch(error => console.log(error));
};

module.exports.getSpotsforDashboard = getSpotsfoDashboard;

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

const deleteSpot = (params) => {
  return db.query(`
  DELETE FROM spots where spot_id = $1;
  `, [params])
    .then(res => {
      return res.rows;
    })
    .catch(error => console.log(error));
};

module.exports.deleteSpot = deleteSpot;

//RENTER FUNCTION
//find spots based on map search (for homepage)
//QUERY spots BY first two letter of postal code - SELECT address price, rating, all owner user details (id, name, email, avatar), rating

const getSpotsForSearch = (city) => {
  return db.query(`
  SELECT id, street_address, city, country, postal_code, picture, price
  FROM spots
  WHERE user_id = $1
  `, [city])
    .then(res => {
      return res.rows;
    })
    .catch(error => console.log(error));
};

module.exports.getSpotsForSearch = getSpotsForSearch;
