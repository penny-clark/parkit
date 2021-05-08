//For renter

//give a rating for their past spots
//INSERT user_id, spot_id, rating

const createSpotRating = (userid, spotid, rating) => {
  return db.query(`
  INSERT INTO spot_ratings (userid, spotid, rating)
  VALUES ($1, $2, $3);
  `, [userid, spotid, rating])
    .then(res => {
      return res.rows;
    })
    .catch(error => console.log(error));
};

module.exports.createSpotRating = createSpotRating;