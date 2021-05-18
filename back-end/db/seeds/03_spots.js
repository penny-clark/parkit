
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('spots').del()
    .then(function () {
      // Inserts seed entries
      return knex('spots').insert([
        {user_id: 1, street_address: '1081 Burrard St', city: 'Vancouver', province: 'BC', country: 'Canada', postal_code: 'V6Z 1Y6', latitude: 49.28069263, longitude: -123.1282111,  picture: 'https://pr.sssagent.com/img/parkingspot1.png', price: 16},
        {user_id: 4, street_address: '1950 Franklin St', city: 'Vancouver', province: 'BC', country: 'Canada', postal_code: 'V5L 1R2', latitude: 49.28206932, longitude: -123.0639555, picture: 'https://pr.sssagent.com/img/parkingspot2.png', price: 3},
        {user_id: 5, street_address: '401 W Georgia St', city: 'Vancouver', province: 'BC', country: 'Canada', postal_code: 'V6B 5A1', latitude: 49.28136813, longitude: -123.1148434, picture: 'https://pr.sssagent.com/img/parkingspot3.png', price: 2},
        {user_id: 8, street_address: '385 Robson St', city: 'Vancouver', province: 'BC', country: 'Canada', postal_code: 'V6B 0H3', latitude: 49.27981064, longitude: -123.1168335, picture: 'https://pr.sssagent.com/img/parkingspot4.png', price: 2},
        {user_id: 9, street_address: '900 Burrard St', city: 'Vancouver', province: 'BC', country: 'Canada', postal_code: 'V6Z 3G5', latitude: 49.28215493, longitude: -123.1243305, picture: 'https://pr.sssagent.com/img/parkingspot5.png', price: 1},
        {user_id: 11, street_address: '1025 Nelson St', city: 'Vancouver', province: 'BC', country: 'Canada', postal_code: 'V6E 1J1', latitude: 49.28217203, longitude: -123.1269472, picture: 'https://pr.sssagent.com/img/parkingspot6.png', price: 3},
        {user_id: 12, street_address: '1133 Barclay St', city: 'Vancouver', province: 'BC', country: 'Canada', postal_code: 'V6E 1G8', latitude: 49.28434298, longitude: -123.1279346, picture: 'https://pr.sssagent.com/img/parkingspot7.png', price: 3},
        {user_id: 13, street_address: '11255 Bidwell St', city: 'Vancouver', province: 'BC', country: 'Canada', postal_code: 'V6G 2K8', latitude: 49.28623826, longitude: -123.1418023, picture: 'https://pr.sssagent.com/img/parkingspot8.png', price: 4},
        {user_id: 14, street_address: '1850 Comox St', city: 'Vancouver', province: 'BC', country: 'Canada', postal_code: 'V6G 2P4', latitude: 49.28909357, longitude: -123.140778, picture: 'https://pr.sssagent.com/img/parkingspot9.png', price: 5},
        {user_id: 4, street_address: '88 W Pender St', city: 'Vancouver', province: 'BC', country: 'Canada', postal_code: 'V6B 6N9', latitude: 49.28053936, longitude: -123.1069607, picture: 'https://pr.sssagent.com/img/parkingspot10.png', price: 5},
        {user_id: 6, street_address: '228 Abbott St', city: 'Vancouver', province: 'BC', country: 'Canada', postal_code: 'V6B 1C8', latitude: 49.28335136, longitude: -123.1063997, picture: 'https://pr.sssagent.com/img/parkingspot11.png', price: 5},
        {user_id: 7, street_address: '101 E Cordova St', city: 'Vancouver', province: 'BC', country: 'Canada', postal_code: 'V6A 4J1', latitude: 49.28267156, longitude: -123.1017607, picture: 'https://pr.sssagent.com/img/parkingspot12.png', price: 5},
        {user_id: 3, street_address: '337 W Hastings St', city: 'Vancouver', province: 'BC', country: 'Canada', postal_code: 'V6B 1H6', latitude: 49.28339596, longitude: -123.1102348, picture: 'https://pr.sssagent.com/img/parkingspot13.png', price: 5},
      ]);
    });
};
