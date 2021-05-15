
//get renter's bookings (obj) as Array by user ID
export function getRenterBookings(userID, bookingsData) {
  const thisUserBookings = [];

  for (const item of bookingsData) {
    if(item.renter_id === userID) {
      thisUserBookings.push(item)
    }
  }
  return thisUserBookings;
}

//get owner's booked schedule (obj) as Array by user ID
export function getOwnerBookings(userID, bookingsData) {
  const thisUserBookings = [];

  for (const item of bookingsData) {
    if(item.owner_id === userID) {
      thisUserBookings.push(item)
    }
  }
  return thisUserBookings;
}

//separate bookings : active, history
export function getHistory(UserBookings) { 

  //get current date
  const currentDate = new Date();
  const reformatDate = currentDate.toISOString();

  const history = [];
  const active = []

  for (const obj of UserBookings) {
    if (obj.end_date_time < reformatDate) {
      history.push(obj)
    } else {
      active.push(obj)
    }
  }
  return [ active, history]
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

 //get owner's spots (obj) as Array by user ID
 export function getOwnerSpots(userID, spotsData) {
  const thisUserSpots = [];

  for (const item of spotsData) {
    if(item.owner.user_id === userID) {
      thisUserSpots.push(item)
    }
  }
  return thisUserSpots;
}

//find spot_address id in owner's spots - to display which spot booked when the owner has 2 or more spots.
export function findSpotAddress(spotIDfromBooking, ownerSpots) {

  for (const item of ownerSpots) {
    if(item.id === spotIDfromBooking) {
      return item.street_address
    }
  }
}

//get renter's bookmark data (obj) as Array by userID
export function getRenterBookmarks(userID, bookmarksData) {
  const thisUserBookmarks = [];
  
  for (const item of bookmarksData) {
    if (item.renter_id === userID) {
      thisUserBookmarks.push(item)
    }
  }

  return thisUserBookmarks;
}

//check bookmarked spot in renter's booking-history list
export function checkBookmarkedspot(spotID, userBookmarks) {
  let bookmarked = false;
  for (const item of userBookmarks) {
    if (item.id === spotID) {            // in bookmarks data , spot_id => id
      bookmarked = true;
    }
  }
  return bookmarked;
}