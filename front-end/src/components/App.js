import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, useParams } from 'react-router-dom';

import './App.scss';
import TopBar from './TopBar';
import SpotListSearch from './SpotListSearch';
import RenterD_myBookings from './RenterD_myBookings';
import RenterD_myBookmarks from './RenterD_myBookmarks';
import RenterD_myCars from './RenterD_myCars';
import RenterD_RegisterCars from './RenterD_RegisterCars';
import OwnerD_BookedSchedule from './OwnerD_BookedSchedule';
import OwnerD_RegisterSpots from './OwnerD_RegisterSpots';
import OwnerD_mySpots from './OwnerD_mySpots';
import PaymentComplete from './PaymentComplete';

export default function App(props)  {

  const [state, setState] = useState({
    spots: [],
    cars: [],
    renterbookings: [],
    ownerbookings: [],
    bookmarks: [],
    spotratings: [],
    user: {id: 1, first_name: "Eggert", last_name: "Eggerson", email: "egg@egg.com", avatar: "https://pr.sssagent.com/img/a1.png", car_id:1}
  });

  //SETS INITIAL DATA FROM DATABASE

  useEffect(() => {
    Promise.all([
      axios.get("/api/spots"),
      axios.get("/api/cars"),
      axios.get("/api/bookings/renter"),
      axios.get("/api/bookings/owner"),
      axios.get("/api/bookmarks"),
      axios.get("/api/spotratings")
    ]).then((all) => {
        const spots = all[0].data
        const cars = all[1].data
        const renterBookings = all[2].data
        const ownerBookings = all[3].data
        const bookmarks = all[4].data
        const spotRatings = all[5].data
        const setSpots = Object.keys(spots).map(key => {return spots[key]})
        const setCars = Object.keys(cars).map(key => {return cars[key]})
        const setRenterBookings = Object.keys(renterBookings).map(key => {return renterBookings[key]})
        const setOwnerBookings = Object.keys(ownerBookings).map(key => {return ownerBookings[key]})
        const setBookmarks = Object.keys(bookmarks).map(key => {return bookmarks[key]})
        const setSpotRatings = Object.keys(spotRatings).map(key => {return spotRatings[key]})
        setState(prev => ({ ...prev, spots: setSpots, cars: setCars, renterbookings: setRenterBookings, ownerbookings: setOwnerBookings, bookmarks: setBookmarks, spotratings: setSpotRatings}))
    
      })
      .catch()
    }, []);

  // MAKE A NEW BOOKING

  function bookSpot(carId, spotId, startTime, endTime, addr, city, province, pcode, price, pic, ownerid, ownerfn, ownerln, ownerem, owneravatar, spotrating) {
    const newRenterBookingObj = {
      id: (state.renterbookings[state.renterbookings.length -1].id +1),
      car_id: carId,
      renter_id: state.user.id,
      start_date_time: startTime,
      end_date_time: endTime,
      spot: {spot_id: spotId, street_address: addr, city: city, province: province, postal_code: pcode, price: price, picture: pic},
      owner: {user_id: ownerid, first_name: ownerfn, last_name: ownerln, owner_email: ownerem, avatar: owneravatar},
      rating: spotrating
    }
    
    const newOwnerBookingObj = {
      id: (state.ownerbookings[state.ownerbookings.length -1].id +1),
      car_id: carId,
      spot_id: spotId,
      owner_id: ownerid,
      start_date_time: startTime,
      end_date_time: endTime,
      car: {car_id: carId, car_make: "Ford", model: "Prius", colour: "Red", plate_number: "AAAAAA", rating: 3}, 
      renter: {renter_id: state.user.id, first_name: state.user.first_name, last_name: state.user.last_name, renter_email: state.user.email, avatar: state.user.avatar}
    }

    return axios
    .post('/api/bookings', {
      car_id: carId,
      spot_id: spotId,
      start_datetime: startTime,
      end_datetime: endTime
    })
    .then(res => {
      const newOwnerBookingsArr = [ ...state.ownerbookings]
      const newRenterBookingsArr = [ ...state.renterbookings]
      newOwnerBookingsArr.push(newOwnerBookingObj)
      newRenterBookingsArr.push(newRenterBookingObj)
      setState(prev => ({ ...prev, renterbookings: newRenterBookingsArr, ownerbookings: newOwnerBookingsArr}))
    })
    .catch(err => console.log(err))
  }

  //CANCEL A BOOKING

  function cancelBooking(id) {
    const newRenterBookings = state.renterbookings.filter(booking => booking.id !== id)
    const newOwnerBookings = state.ownerbookings.filter(booking => booking.id !== id)
    return axios
    .delete(`/api/bookings/${id}`, {})
    .then(res => {
      setState(prev => ({ ...prev, renterbookings: [ ...newRenterBookings], ownerbookings: [ ...newOwnerBookings]}))
    })
    .catch(err => console.log(err))
  }

  //ADD A NEW CAR

  function addCar(userid, make, model, colour, plate_number){
    const newCarObj = {
      id: (state.cars[state.cars.length -1].id +1),
      user_id: state.user.id,
      make: make,
      model: model,
      colour: colour,
      plate_number: plate_number
    }
    return axios
    .post('/api/cars', {
      id: userid,
      make: make,
      model: model,
      colour: colour,
      plate_number: plate_number
    })
    .then(res => { 
      const newCarArr = [ ...state.cars]
      newCarArr.push(newCarObj)
      setState(prev => ({ ...prev, cars: newCarArr}))
    })
    .catch(err => console.log(err))
  }

  //DELETE A CAR 

  function deleteCar(id) {
    const newCars = state.cars.filter(car => car.id !== id)
    return axios
    .delete(`/api/cars/${id}`, {})
    .then(res => {
      setState(prev => ({ ...prev, cars: [ ...newCars]}))
    })
    .catch(err => console.log(err))
  }

  //SET DEFAULT CAR

  function setDefaultCar(carid) {
    const newUser = { ...state.user, car_id: carid}
    setState(prev => ({ ...prev, user: newUser}))
  }

  //ADD A NEW SPOT

  function addSpot (userid, street_address, city, province, country, postal_code, latitude, longitude, picture, price){
    const newSpotObj = {
      id: (state.spots[state.spots.length -1].id +1),
      owner: {user_id: userid, first_name: state.user.first_name, last_name: state.user.last_name, owner_email: state.user.email, avatar: state.user.avatar},
      street_address,
      city,
      province,
      country,
      postal_code,
      latitude,
      longitude,
      picture,
      price,
      rating: null
    }
    
    return axios
      .post('/api/spots', {
        id: userid,
        street_address,
        city,
        province,
        country,
        postal_code,
        latitude,
        longitude,
        picture,
        price
      })
      .then(res => { 
        const newSpotArr = [ ...state.spots]
        newSpotArr.push(newSpotObj)
        setState(prev => ({ ...prev, spots: newSpotArr}))
      })
      .catch(err => console.log(err))
    }

    // DELETE A SPOT (owner dashboard)

    function deleteSpot(id) {
      const newSpots = state.spots.filter(spot => spot.id !== id)
      return axios
      .delete(`/api/cars/${id}`, {})
      .then(res => {
  
        setState(prev => ({ ...prev, spots: [ ...newSpots]}))
      })
      .catch(err => console.log(err))
    }

    // BOOKMARK A SPOT (renter dashboard) - fix needed: get route is weird

    function bookmarkSpot (userid, spotid, ownerid, ownerfn, ownerln, ownerem, avatar, streetadd, city, province, country, price, picture, postal_code, rating){
      const newBM = {
        bookmark_id: (state.spotratings[state.spotratings.length -1].bookmark_id +1),
        city: city,
        country: country,
        id: spotid,
        owner: {user_id: ownerid, first_name: ownerfn, last_name: ownerln, owner_email: ownerem, avatar: avatar},
        picture: picture,
        postal_code: postal_code,
        price: price,
        province: province,
        rating: rating,
        renter_id: userid,
        street_address: streetadd
      }
      return axios
        .post('/api/bookmarks', {
          user_id: userid,
          spot_id: spotid
        })
        .then(res => {
          const newBMArr = [ ...state.bookmarks]
          newBMArr.push(newBM)
          setState(prev => ({ ...prev, bookmarks: newBMArr}))
        })
        .catch(err => console.log(err))
      }

      //SUBMIT A SPOT RATING

      function rateSpot (user_id, spot_id, rating) {
        const newRating = {
        id: (state.spotratings[state.spotratings.length -1].id +1),
        user_id,
        spot_id,
        rating
        }
        return axios
        .post('/api/spotratings', {
          user_id,
          spot_id,
          rating
        })
        .then(res => {
          const newRatingsArr = [ ...state.spotratings]
          newRatingsArr.push(newRating)
          setState(prev => ({ ...prev, spotratings: newRatingsArr}))
        })
        .catch(err => console.log(err))
      }


  return (

      <div className="main">
   
        <TopBar user={state.user}/>
         
          <Switch>
            <Route exact path="/"> 
            <SpotListSearch
                spots={state.spots}
                user={state.user}
                bookSpot={bookSpot}
                bookings={state.renterbookings}
              />
            </Route>
            <Route exact path="/mybookings"> 
              <RenterD_myBookings 
                user={state.user} 
                bookingsR={state.renterbookings} 
                cancelBooking={cancelBooking}
                bookmarkSpot={bookmarkSpot}
                bookmarks={state.bookmarks}
                rateSpot={rateSpot}
                ratings={state.spotratings}
                /> 
            </Route>
            <Route exact path="/mybookmarks">
              <RenterD_myBookmarks 
                  user={state.user} 
                  bookmarks={state.bookmarks}
                  bookSpot={bookSpot}
                />
            </Route>
            <Route exact path="/mycars">
              <RenterD_myCars 
                user={state.user}
                cars={state.cars}
                deleteCar={deleteCar}
                setDefaultCar={setDefaultCar}/>
            </Route>
            <Route exact path="/addnewcar">
              <RenterD_RegisterCars 
              user={state.user} 
              addCar={addCar} />
            </Route>

            <Route exact path="/mybookedschedule">
              <OwnerD_BookedSchedule 
                user={state.user} 
                bookingsO={state.ownerbookings} 
                spots={state.spots} 
                cancelBooking={cancelBooking}/>
            </Route>
            <Route exact path="/myspots">
              <OwnerD_mySpots 
              user={state.user} 
              spots={state.spots}
              deleteSpot={deleteSpot}/>
            </Route>
            <Route exact path="/addnewspot">
              <OwnerD_RegisterSpots 
              user={state.user} 
              addSpot={addSpot}/>
            </Route>

            <Route exact path="/payment_complete"> <PaymentComplete /> </Route>
          </Switch>
      
      </div>

    );
  
}