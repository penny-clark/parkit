// These are testing objects that are needed in front-end :
//  - spots : '/'
//  - booking : renter's dashboard > booking list
//  - booked_schedule : owner's dashboard > booked schedule
//  

export const spots = [
  {
    id: 1,
    owner: {
      user_id: 1,
      first_name: 'Eggert',
      last_name:'Eggerson',
      owner_email:'egg@egg.com',
      avatar: 'https://pr.sssagent.com/img/a1.png'
    },
    street_address: '1081 Burrard St',
    city: 'Vancouver',
    province: 'BC',
    country: 'Canada',
    postal_code : 'V6Z 1Y6',
    price: 16,
    picture : 'https://pr.sssagent.com/img/parkingspot1.png',
    rating: 4
  },
  {
    id: 2,
    owner: {
      user_id: 4,
      first_name: 'Frank',
      last_name:'Faststuff',
      owner_email:'franky@frank.com',
      avatar: 'https://pr.sssagent.com/img/a4.png'
    },
    street_address: '1950 Franklin St',
    city: 'Vancouver',
    province: 'BC',
    country: 'Canada',
    postal_code : 'V5L 1R2',
    price: 3,
    picture : 'https://pr.sssagent.com/img/parkingspot2.png',
    rating: 3
  },
  {
    id: 3,
    owner: {
      user_id: 5,
      first_name: 'Beth',
      last_name:'Betilda',
      owner_email:'bethy@gmail.com',
      avatar: 'https://pr.sssagent.com/img/a5.png'
    },
    street_address: '401 W Georgia St',
    city: 'Vancouver',
    province: 'BC',
    country: 'Canada',
    postal_code : 'V6B 5A1',
    price: 2,
    picture : 'https://pr.sssagent.com/img/parkingspot3.png',
    rating: 5
  },
  {
    id: 4,
    owner: {
      user_id: 8,
      first_name: 'Hilda',
      last_name:'Sprockets',
      owner_email:'hideehilda@gmail.com',
      avatar: 'https://pr.sssagent.com/img/a8.png'
    },
    street_address: '385 Robson St',
    city: 'Vancouver',
    province: 'BC',
    country: 'Canada',
    postal_code : 'V6B 0H3',
    price: 2,
    picture : 'https://pr.sssagent.com/img/parkingspot4.png',
    rating: 4
  },
  {
    id: 5,
    owner: {
      user_id: 9,
      first_name: 'TeeJay',
      last_name:'Grammar',
      owner_email:'tj@gmail.com',
      avatar: 'https://pr.sssagent.com/img/a9.png'
    },
    street_address: '900 Burrard St',
    city: 'Vancouver',
    province: 'BC',
    country: 'Canada',
    postal_code : 'V6Z 3G5',
    price: 1,
    picture : 'https://pr.sssagent.com/img/parkingspot5.png',
    rating: 2
  },
  {
    id: 6,
    owner: {
      user_id: 11,
      first_name: 'Greg',
      last_name:'Gregerson',
      owner_email:'gregly@gmail.com',
      avatar: 'https://pr.sssagent.com/img/a11.png'
    },
    street_address: '1025 Nelson St',
    city: 'Vancouver',
    province: 'BC',
    country: 'Canada',
    postal_code : 'V6E 1J1',
    price: 3,
    picture : 'https://pr.sssagent.com/img/parkingspot6.png',
    rating: null
  },
  {
    id: 7,
    owner: {
      user_id: 12,
      first_name: 'Brad',
      last_name:'Wong',
      owner_email:'bwong@gmail.com',
      avatar: 'https://pr.sssagent.com/img/a12.png'
    },
    street_address: '1133 Barclay St',
    city: 'Vancouver',
    province: 'BC',
    country: 'Canada',
    postal_code : 'V6E 1G8',
    price: 3,
    picture : 'https://pr.sssagent.com/img/parkingspot7.png',
    rating: null
  },
  {
    id: 8,
    owner: {
      user_id: 13,
      first_name: 'Amy',
      last_name:'Schindler',
      owner_email:'aamyss@hey.com',
      avatar: 'https://pr.sssagent.com/img/a13.png'
    },
    street_address: '1255 Bidwell St',
    city: 'Vancouver',
    province: 'BC',
    country: 'Canada',
    postal_code : 'V6G 2K8',
    price: 4,
    picture : 'https://pr.sssagent.com/img/parkingspot8.png',
    rating: null
  },
  {
    id: 9,
    owner: {
      user_id: 14,
      first_name: 'Marie',
      last_name:'Barker',
      owner_email:'mariebarker22@gamil.com',
      avatar: 'https://pr.sssagent.com/img/a14.png'
    },
    street_address: '1850 Comox St',
    city: 'Vancouver',
    province: 'BC',
    country: 'Canada',
    postal_code : 'V6G 2P4',
    price: 5,
    picture : 'https://pr.sssagent.com/img/parkingspot9.png',
    rating: null
  },
]

// renter's dashboard > booking list
export const bookings = [
  {
    id: 1,
    car_id: 1,
    start_date_time: '5/1/2021 8:00:00',
    end_date_time: '5/1/2021 11:00:00',
    spot : {
      spot_id: 9,
      street_address:'1850 Comox St',
      city: 'Vancouver',
      province: 'BC',
      country: 'Canada',
      postal_code:'V6G 2P4',
      price: 5,
      picture : 'https://pr.sssagent.com/img/parkingspot9.png'
    },
    spot_rating: 4
  },
  {
    id: 2,
    car_id: 2,
    start_date_time: '5/2/2021 11:00:00',
    end_date_time: '5/2/2021 15:00:00',
    spot : {
      spot_id: 2,
      street_address: '1950 Franklin St',
      city: 'Vancouver',
      province: 'BC',
      country: 'Canada',
      postal_code: 'V5L 1R2',
      price: 3,
      picture: 'https://pr.sssagent.com/img/parkingspot2.png',
    },
    spot_rating: 3
  },
  {
    id: 3,
    car_id: 5,
    start_date_time: '5/3/2021 12:00:00',
    end_date_time: '5/3/2021 20:00:00',
    spot : {
      spot_id: 5,
      street_address: '900 Burrard St',
      city: 'Vancouver',
      province: 'BC',
      country: 'Canada',
      postal_code : 'V6Z 3G5',
      price: 1,
      picture : 'https://pr.sssagent.com/img/parkingspot5.png',
    },
    spot_rating: null
  },
  {
    id: 7,
    car_id: 3,
    start_date_time: '5/22/2021 7:00:00',
    end_date_time: '5/22/2021 10:00:00',
    spot : {
      spot_id: 3,
      street_address: '401 W Georgia St',
      city: 'Vancouver',
      province: 'BC',
      country: 'Canada',
      postal_code : 'V6B 5A1',
      price: 2,
      picture : 'https://pr.sssagent.com/img/parkingspot3.png',
    },
    spot_rating: null
  },
]
  

export const booked_schedule = [
  {
    id: 1,
    spot_id: 9,
    start_date_time: '5/1/2021 8:00:00',
    end_date_time: '5/1/2021 11:00:00',
    street_address:'1850 Comox St',
    price: 5,
    car: {
      car_id: 1,
      make: 'Ford',
      model: 'Prius',
      color: 'Red',
      plate_number: 'AAAAAA'
    },
    renter: {
      first_name: 'Eggert',
      last_name: 'Eggerson',
      email: 'egg@egg.com',
      avatar: 'https://pr.sssagent.com/img/a1.png'
    },
    renter_rating: 3
  },
  {
    id: 2,
    spot_id: 2,
    start_date_time: '5/2/2021 11:00:00',
    end_date_time: '5/2/2021 15:00:00',
    street_address:'1950 Franklin St',
    price: 3,
    car: {
      car_id: 2,
      make: 'Chevrolet',
      model: 'Malibu',
      color: 'Pink',
      plate_number: 'CCCCCC'
    },
    renter: {
      first_name: 'Esther',
      last_name: 'Catchemall',
      email: 'essie@gmail.com',
      avatar: 'https://pr.sssagent.com/img/a6.png'
    },
    renter_rating: 5
  },
  {
    id: 3,
    spot_id: 5,
    start_date_time: '5/3/2021 12:00:00',
    end_date_time: '5/3/2021 20:00:00',
    street_address:'900 Burrard St',
    price: 1,
    car: {
      car_id: 5,
      make: 'Volkswagon',
      model: 'Golf',
      color: 'Lavender',
      plate_number: 'YUYUYU'
    },
    renter: {
      first_name: 'Tilda',
      last_name: 'Tildy',
      email: 'tildy@gmail.com',
      avatar: 'https://pr.sssagent.com/img/a2.png'
    },
    renter_rating: 4
  },
  {
    id: 7,
    spot_id: 3,
    start_date_time: '5/22/2021 7:00:00',
    end_date_time: '5/22/2021 10:00:00',
    street_address:'401 W Georgia St',
    price: 2,
    car: {
      car_id: 3,
      make: 'Hyundai',
      model: 'Elantra',
      color: 'Silver',
      plate_number: 'TTTTTT'
    },
    renter: {
      first_name: 'John',
      last_name: 'Stamos',
      email: 'jayjay@gmail.com',
      avatar: 'https://pr.sssagent.com/img/a7.png'
    },
    renter_rating: 5
  }
]


