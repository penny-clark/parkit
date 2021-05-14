
  //get owner's bookings as Array by user ID
export function getOwnerBookings(userID, bookingsData) {
  const thisUserBookings = [];

  for (const item of bookingsData) {
    if(item.owner_id === userID) {
      thisUserBookings.push(item)
    }
  }
  return thisUserBookings;
}

 //get owner's spot obj as Array by user ID
export function getOwnerSpots(userID, spotsData) {
  const thisUserSpots = [];

  for (const item of spotsData) {
    if(item.owner.user_id === userID) {
      thisUserSpots.push(item)
    }
  }
  return thisUserSpots;
}

//get renter's bookings as Array by user ID
export function getRenterBookings(userID, bookingsData) {
  const thisUserBookings = [];

  for (const item of bookingsData) {
    if(item.renter_id === userID) {
      thisUserBookings.push(item)
    }
  }
  return thisUserBookings;
}


//get renter's Cars(obj) as Array by user's car ID
export function getRenterCars(userID, carsData) {
  const thisUserCars = [];
  
  for (const item of carsData) {
    if (item.user_id === userID) {
      thisUserCars.push(item)
    }
  }

  return thisUserCars;
}