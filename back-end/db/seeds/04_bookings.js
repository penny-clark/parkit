
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('bookings').del()
    .then(function () {
      // Inserts seed entries
      return knex('bookings').insert([
        {car_id: 1, spot_id: 9, start_date_time: '2021-05-01 8:00:00', end_date_time: '2021-05-01 11:00:00'},
        {car_id: 2, spot_id: 2, start_date_time: '2021-05-02 11:00:00', end_date_time: '2021-05-02 15:00:00'},
        {car_id: 5, spot_id: 5, start_date_time: '2021-05-03 12:00:00', end_date_time: '2021-05-03 20:00:00'},
        {car_id: 3, spot_id: 6, start_date_time: '2021-05-03 13:00:00', end_date_time: '2021-05-03 14:00:00'},
        {car_id: 1, spot_id: 9, start_date_time: '2021-05-03 8:00:00', end_date_time: '2021-05-03 11:00:00'},
        {car_id: 2, spot_id: 7, start_date_time: '2021-05-07 9:00:00', end_date_time: '2021-05-07 10:00:00'},
        {car_id: 3, spot_id: 3, start_date_time: '2021-05-22 7:00:00', end_date_time: '2021-05-22 10:00:00'},
        {car_id: 5, spot_id: 4, start_date_time: '2021-05-24 16:00:00', end_date_time: '2021-05-24 18:00:00'},
        {car_id: 1, spot_id: 9, start_date_time: '2021-05-24 17:00:00', end_date_time: '2021-05-24 20:00:00'},
        {car_id: 2, spot_id: 9, start_date_time: '2021-06-01 13:00:00', end_date_time: '2021-06-01 14:00:00'},
        {car_id: 2, spot_id: 8, start_date_time: '2021-06-01 14:00:00', end_date_time: '2021-06-01 17:00:00'},
        {car_id: 5, spot_id: 4, start_date_time: '2021-06-04 13:00:00', end_date_time: '2021-06-04 15:00:00'}
        
      ]);
    });
};
