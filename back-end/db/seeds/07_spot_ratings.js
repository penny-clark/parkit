
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('spot_ratings').del()
    .then(function () {
      // Inserts seed entries
      return knex('spot_ratings').insert([
        {user_id: 3, spot_id: 9,rating: 4},
        {user_id: 6, spot_id: 2,rating: 3},
        {user_id: 2, spot_id: 5,rating: 5},
        {user_id: 7, spot_id: 6,rating: 4},
        {user_id: 1, spot_id: 9,rating: 2}
      ]);
    });
};
