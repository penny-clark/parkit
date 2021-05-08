//OWNER FUNCTIONS

//give a rating
//INSERT renter_id, owner_id, rating

const createRenterRating = (renter_id, owner_id, rating) => {
  return db.query(`
  INSERT INTO spot_ratings (renter_id, owner_id, rating)
  VALUES ($1, $2, $3);
  `, [renter_id, owner_id, rating])
    .then(res => {
      return res.rows;
    })
    .catch(error => console.log(error));
};

module.exports.createRenterRating = createRenterRating;