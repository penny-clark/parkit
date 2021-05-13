
  //get owner's bookings as Array by user ID
export function getRenterBookings(userID, bookingsData) {
  const thisUserBookings = [];

  for (const item of bookingsData) {
    if(item.owner_id === userID) {
      thisUserBookings.push(item)
    }
  }
  return thisUserBookings;
}

 //get owner's spot address as Array by user ID
export function getRenterSpots(userID, spotsData) {
  const thisUserSpots = [];

  for (const item of spotsData) {
    if(item.owner.user_id === userID) {
      thisUserSpots.push(item.street_address)
    }
  }
  return thisUserSpots;
}