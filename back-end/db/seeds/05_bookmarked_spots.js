
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('bookmarked_spots').del()
    .then(function () {
      // Inserts seed entries
      return knex('bookmarked_spots').insert([
        {user_id: 1, spot_id: 9},
        {user_id: 5, spot_id: 2}
      ]);
    });
};
