
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('spots').del()
    .then(function () {
      // Inserts seed entries
      return knex('spots').insert([
        {user_id: 1, street_address: '1081 Burrard St', city: 'Vancouver', province: 'BC', country: 'Canada', postal_code: 'V6Z 1Y6', picture: 'https://pr.sssagent.com/img/parkingspot1.png', price: 16},
        {user_id: 4, street_address: '1950 Franklin St', city: 'Vancouver', province: 'BC', country: 'Canada', postal_code: 'V5L 1R2', picture: 'https://pr.sssagent.com/img/parkingspot1.png', price: 3},
        {user_id: 5, street_address: '401 W Georgia St', city: 'Vancouver', province: 'BC', country: 'Canada', postal_code: 'V6B 5A1', picture: 'https://pr.sssagent.com/img/parkingspot1.png', price: 2},
        {user_id: 8, street_address: '385 Robson St', city: 'Vancouver', province: 'BC', country: 'Canada', postal_code: 'V6B 0H3', picture: 'https://pr.sssagent.com/img/parkingspot1.png', price: 2},
        {user_id: 9, street_address: '900 Burrard St', city: 'Vancouver', province: 'BC', country: 'Canada', postal_code: 'V6Z 3G5', picture: 'https://pr.sssagent.com/img/parkingspot1.png', price: 1},
        {user_id: 11, street_address: '1025 Nelson St', city: 'Vancouver', province: 'BC', country: 'Canada', postal_code: 'V6E 1J1', picture: 'https://pr.sssagent.com/img/parkingspot1.png', price: 3},
        {user_id: 12, street_address: '1133 Barclay St', city: 'Vancouver', province: 'BC', country: 'Canada', postal_code: 'V6E 1G8', picture: 'https://pr.sssagent.com/img/parkingspot1.png', price: 3},
        {user_id: 13, street_address: '11255 Bidwell St', city: 'Vancouver', province: 'BC', country: 'Canada', postal_code: 'V6G 2K8', picture: 'https://pr.sssagent.com/img/parkingspot1.png', price: 4},
        {user_id: 14, street_address: '1850 Comox St', city: 'Vancouver', province: 'BC', country: 'Canada', postal_code: 'V6G 2P4', picture: 'https://pr.sssagent.com/img/parkingspot1.png', price: 5},
      ]);
    });
};
