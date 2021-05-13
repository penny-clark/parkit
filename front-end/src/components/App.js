import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, useParams } from 'react-router-dom';

import './App.scss';
import TopBar from './TopBar';
import SearchBar from './SearchBar';
import SearchResult from './SearchResult';
import SpotList from './SpotList';
import RenterD_myBookings from './RenterD_myBookings';
import RenterD_myCars from './RenterD_myCars';


export default function App(props)  {

  function bookSpot(carId, spotId, startTime, endTime) {
    return axios
    .post('/api/bookings', {
      car_id: carId,
      spot_id: spotId,
      start_datetime: startTime,
      end_datetime: endTime
    })
    .then(res => {
      console.log(res)
    })
    .catch(err => console.log(err))
  }


  const [state, setState] = useState({
    spots: [],
    renterbookings: [],
    ownerbookings: [],
    user: {id: 1, first_name: "Eggert", last_name: "Eggerson", email: "egg@egg.com", avatar: "https://pr.sssagent.com/img/a1.png", car_id: 1, spot_id: 1}
  });

  useEffect(() => {
    Promise.all([
      axios.get("/api/spots"),
      axios.get("api/bookings/renter"),
      axios.get("api/bookings/owner")
    ]).then((all) => {
        const spots = all[0].data
        const renterBookings = all[1].data
        const ownerBookings = all[2].data
        const setSpots = Object.keys(spots).map(key => {return spots[key]})
        const setRenterBookings = Object.keys(renterBookings).map(key => {return renterBookings[key]})
        const setOwnerBookings = Object.keys(ownerBookings).map(key => {return ownerBookings[key]})
        setState(prev => ({ ...prev, spots: setSpots, renterbookings: setRenterBookings, ownerbookings: setOwnerBookings}))
      })
      .catch()
    }, []);

  return (

      <div className="main">
   
        <TopBar user={state.user}/>
         
          <Switch>
            <Route exact path="/"> <SearchBar /> <SearchResult/>  <SpotList
              spots={state.spots}
              user={state.user}
              bookSpot={bookSpot}
              /></Route>
            <Route exact path="/mybookings"> <RenterD_myBookings user={state.user} bookingsR={state.renterbookings}/> </Route>
            <Route exact path="/mybookmarks">My Bookmarks : ID</Route>
            <Route exact path="/mycars"><RenterD_myCars user={state.user}/></Route>
            <Route exact path="/addnewcar">Add a Car : ID</Route>

            <Route exact path="/myspotbooking">My spot - Booked Schedule</Route>
            <Route exact path="/myspots">My spots</Route>
            <Route exact path="/addnewspot">Add a Spot : ID</Route>
          </Switch>
      
      </div>

    );
  
}