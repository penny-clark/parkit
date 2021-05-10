
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {user_id: 1, make: 'Ford', model: 'Prius', colour: 'Red', plate_number: 'AAAAAA'},
        {user_id: 6, make: 'Chevrolet', model: 'Malibu', colour: 'Pink', plate_number: 'CCCCCC'},
        {user_id: 7, make: 'Hyudai', model: 'Elantra', colour: 'Silver', plate_number: 'TTTTTT'},
        {user_id: 10, make: 'Toyota', model: 'Camry', colour: 'Orange', plate_number: 'OOOOOO'},
        {user_id: 2, make: 'Volkwagon', model: 'Golf', colour: 'Lavender', plate_number: 'YUYUYU'}
      ]);
    });
};
