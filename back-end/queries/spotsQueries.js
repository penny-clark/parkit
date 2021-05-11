const db = require('../lib/db');
//query funtions for spots related task 



//find spots by user id (for owner dashboard)
//WF slide 14 my spots listing: 
//QUERY for spot id, address, price per hour, image

const getSpotsfoDashboard = () => {
  return db.query(`
  SELECT * FROM users;
  `)
    .then(res => {
      return res.rows;
    })
  //  .catch(error => console.log(error));
};

module.exports.getSpotsfoDashboard = getSpotsfoDashboard;
