
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('bookings').del()
    .then(function () {
      // Inserts seed entries
      return knex('bookings').insert([
        {car_id: 1, spot_id: 9, start_date_time: '2021-05-01 8:00:00', end_date_time: '2021-05-01 11:00:00', start_string: 'Sat May 01 2021 8:00', end_string: 'Sat May 01 2021 11:00'},
        {car_id: 1, spot_id: 2, start_date_time: '2021-05-02 11:00:00', end_date_time: '2021-05-02 15:00:00', start_string:'Sun May 02 2021 11:00', end_string: 'Sun May 02 2021 15:00'},
        {car_id: 5, spot_id: 5, start_date_time: '2021-05-03 12:00:00', end_date_time: '2021-05-03 20:00:00', start_string: '2021-05-03 12:00:00', end_string: '2021-05-03 20:00:00'},
        {car_id: 3, spot_id: 1, start_date_time: '2021-05-03 13:00:00', end_date_time: '2021-05-03 14:00:00', start_string: 'Mon May 03 2021 13:00', end_string: 'Mon May 03 2021 14:00'},
        {car_id: 1, spot_id: 9, start_date_time: '2021-05-03 8:00:00', end_date_time: '2021-05-03 11:00:00', start_string: 'Mon May 03 2021 8:00', end_string: 'Mon May 03 2021 11:00'},
        {car_id: 2, spot_id: 7, start_date_time: '2021-05-07 9:00:00', end_date_time: '2021-05-07 10:00:00', start_string: '2021-05-07 9:00:00', end_string: '2021-05-07 10:00:00'},
        {car_id: 3, spot_id: 3, start_date_time: '2021-05-22 7:00:00', end_date_time: '2021-05-22 10:00:00', start_string: '2021-05-22 7:00:00', end_string: '2021-05-22 10:00:00'},
        {car_id: 5, spot_id: 4, start_date_time: '2021-05-24 16:00:00', end_date_time: '2021-05-24 18:00:00', start_string: '2021-05-24 16:00:00', end_string: '2021-05-24 18:00:00'},
        {car_id: 1, spot_id: 9, start_date_time: '2021-05-24 17:00:00', end_date_time: '2021-05-24 20:00:00', start_string: 'Mon May 24 2021 17:00', end_string: 'Mon May 24 2021 20:00'},
        {car_id: 2, spot_id: 9, start_date_time: '2021-06-01 13:00:00', end_date_time: '2021-05-24 20:00:00', start_string: '2021-06-01 13:00:00', end_string: '2021-05-24 20:00:00'},
        {car_id: 1, spot_id: 8, start_date_time: '2021-06-01 14:00:00', end_date_time: '2021-06-01 17:00:00', start_string: 'Tues June 01 2021 14:00', end_string: 'Tues June 01 2021 17:00'},
        {car_id: 5, spot_id: 4, start_date_time: '2021-06-04 13:00:00', end_date_time: '2021-06-04 15:00:00', start_string: '2021-06-04 13:00:00', end_string: '2021-06-04 15:00:00'},
        {car_id: 5, spot_id: 1, start_date_time: '2021-06-05 13:00:00', end_date_time: '2021-06-05 14:00:00', start_string:'Sat June 05 2021 13:00', end_string: 'Sat June 05 2021 14:00'},
        {car_id: 4, spot_id: 1, start_date_time: '2021-06-06 13:00:00', end_date_time: '2021-06-06 16:00:00', start_string: 'Sun June 06 2021 13:00', end_string: 'Sun June 06 2021 16:00'},
        {car_id: 1, spot_id: 4, start_date_time: '2021-06-07 13:00:00', end_date_time: '2021-06-07 16:00:00', start_string: 'Mon June 07 2021 13:00', end_string: 'Mon June 07 2021 16:00'}
        
      ]);
    });
};
