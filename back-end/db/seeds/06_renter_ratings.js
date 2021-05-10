
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('renter_ratings').del()
    .then(function () {
      // Inserts seed entries
      return knex('renter_ratings').insert([
        {owner_id: 14, renter_id: 1, rating: 3},
        {owner_id: 4, renter_id: 6, rating: 5},
        {owner_id: 9, renter_id: 2, rating: 4},
        {owner_id: 11, renter_id: 7, rating: 5},
        {owner_id: 1, renter_id: 14, rating: 2}
      ]);
    });
};
