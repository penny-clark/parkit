import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, useParams } from 'react-router-dom';

import './App.scss';
import { Typography, Button } from '@material-ui/core';

import TopBar from './TopBar';
import SearchBar from './SearchBar';
import SearchResult from './SearchResult';
import SpotList from './SpotList';
import RenterD_myBookings from './RenterD_myBookings';



export default function App(props)  {

  function makeNewBooking(spotId, carId, startTime, endTime) {
    return axios
    .post('/api/bookings', {
      spot_id: spotId,
      car_id: carId,
      start_datetime: startTime,
      end_datetime: endTime
    })
    .then(res => {
      console.log(res)
    })
    .catch(err => console.log(err))
  }

  const user = {
    user_id: 1,
    first_name: "Eggert",
    last_name: "Eggerson",
    owner_email: "egg@egg.com",
    avatar: "https://pr.sssagent.com/img/a1.png",
    spot_id: 1,
    car_id: 1
  }

  const [state, setState] = useState({
    spots: [],
    user: {id: 1, first_name: "Eggert", last_name: "Eggerson", email: "egg@egg.com", avatar: "https://pr.sssagent.com/img/a1.png"}
  });

  useEffect( () => {
    Promise.all([
      axios.get("/api/spots")
    ]).then((all) => {
        const spots = all[0].data
        const setSpots = Object.keys(spots).map(key => {return spots[key]})
        setState(prev => ({ ...prev, spots: setSpots}))
        console.log(setSpots, "this is what I made my spots")
      })
    }, []);

  return (

      <div className="main">

          <TopBar user={user}/>

         
    < Router>
      <Switch>
        <Route exact path="/"> <SearchBar />, <SearchResult/>  <SpotList
          spots={state.spots}
          user={state.user}
          bookSpot={makeNewBooking}
          /></Route>
        <Route exact path="/mybookings"> <RenterD_myBookings user={user}/> </Route>
        <Route exact path="/mybookmarks">My Bookmarks : ID</Route>
        <Route exact path="/mycars">My Cars : ID</Route>
        <Route exact path="/addnewcar">Add a Car : ID</Route>
      </Switch>
    </Router>
      </div>

    );
  
}

