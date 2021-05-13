
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