import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, useParams } from 'react-router-dom';

import './App.scss';
import TopBar from './TopBar';
import RenterD_myBookings from './RenterD_myBookings';
import RenterD_myCars from './RenterD_myCars';
import OwnerD_BookedSchedule from './OwnerD_BookedSchedule';
import SpotListSearch from './SpotListSearch';
import RenterD_RegisterCars from './RenterD_RegisterCars';
import OwnerD_RegisterSpots from './OwnerD_RegisterSpots';
import { CollectionsOutlined } from '@material-ui/icons';


export default function App(props)  {

  const [state, setState] = useState({
    spots: [],
    renterbookings: [],
    ownerbookings: [],
    user: {id: 1, first_name: "Eggert", last_name: "Eggerson", email: "egg@egg.com", avatar: "https://pr.sssagent.com/img/a1.png", car_id: 1, spot_id: 1}
  });

  function bookSpot(carId, spotId, startTime, endTime) {
    return axios
    .post('/api/bookings', {
      car_id: carId,
      spot_id: spotId,
      start_datetime: startTime,
      end_datetime: endTime
    })
    .then(res => {
      console.log("stage 2")
      Promise.all([
      axios.get("/api/bookings/renter"),
      axios.get("/api/bookings/owner")
      ])
    })
    .then(all => { 
      console.log("stage 3")
      const renterBookings = all[0].data
      const ownerBookings = all[1].data
      const newRenterBookings = Object.keys(renterBookings).map(key => {return renterBookings[key]})
      const newOwnerBookings = Object.keys(ownerBookings).map(key => {return ownerBookings[key]})
      setState({ ...state, renterbookings: [ ...newRenterBookings], ownerbookings: [ ...newOwnerBookings]})
    })
    .catch(err => console.log(err))


  }

  function cancelBooking(id) {
    console.log("made it to App")
    console.log(state.renterbookings, "current renter bookings")
    const newRenterBookings = state.renterbookings.filter(booking => booking.id !== id)
    const newOwnerBookings = state.ownerbookings.filter(booking => booking.id !== id)
    console.log(newRenterBookings, "NEW RENTERBOOKINGS")
    return axios
    .delete(`/api/bookings/${id}`, {})
    .then(res => {
      setState({ ...state, renterbookings: [ ...newRenterBookings], ownerbookings: [ ...newOwnerBookings]})
    })
    .catch(err => console.log(err))
  }

  useEffect(() => {
    Promise.all([
      axios.get("/api/spots"),
      axios.get("/api/cars"),
      axios.get("/api/bookings/renter"),
      axios.get("/api/bookings/owner")
    ]).then((all) => {
        const spots = all[0].data
        const cars = all[1].data
        const renterBookings = all[2].data
        const ownerBookings = all[3].data
        const setSpots = Object.keys(spots).map(key => {return spots[key]})
        const setCars = Object.keys(cars).map(key => {return cars[key]})
        const setRenterBookings = Object.keys(renterBookings).map(key => {return renterBookings[key]})
        const setOwnerBookings = Object.keys(ownerBookings).map(key => {return ownerBookings[key]})
        setState(prev => ({ ...prev, spots: setSpots, cars: setCars, renterbookings: setRenterBookings, ownerbookings: setOwnerBookings}))
      })
      .catch()
    }, []);

  return (

      <div className="main">
   
        <TopBar user={state.user}/>
         
          <Switch>
            <Route exact path="/"> 
            <SpotListSearch
                spots={state.spots}
                user={state.user}
                bookSpot={bookSpot}
              />
            </Route>
            <Route exact path="/mybookings"> 
              <RenterD_myBookings user={state.user} bookingsR={state.renterbookings} cancelBooking={cancelBooking}/> 
            </Route>
            <Route exact path="/mybookmarks">My Bookmarks : ID</Route>
            <Route exact path="/mycars"><RenterD_myCars user={state.user}/></Route>
            <Route exact path="/addnewcar"><RenterD_RegisterCars user={state.user}/></Route>

            <Route exact path="/myspotbooking">
              <OwnerD_BookedSchedule user={state.user} bookingsO={state.ownerbookings} spots={state.spots}/>
            </Route>
            <Route exact path="/myspots">My spots</Route>
            <Route exact path="/addnewspot"><OwnerD_RegisterSpots user={state.user}/></Route>
          </Switch>
      
      </div>

    );
  
}