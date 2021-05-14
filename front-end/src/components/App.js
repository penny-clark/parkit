import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, useParams } from 'react-router-dom';

import './App.scss';
import TopBar from './TopBar';
import SpotListSearch from './SpotListSearch';
import RenterD_myBookings from './RenterD_myBookings';
import RenterD_myCars from './RenterD_myCars';
import RenterD_RegisterCars from './RenterD_RegisterCars';
import OwnerD_BookedSchedule from './OwnerD_BookedSchedule';
import OwnerD_RegisterSpots from './OwnerD_RegisterSpots';
import OwnerD_mySpots from './OwnerD_mySpots';

export default function App(props)  {

  const [state, setState] = useState({
    spots: [],
    cars: [],
    renterbookings: [],
    ownerbookings: [],
    user: {id: 1, first_name: "Eggert", last_name: "Eggerson", email: "egg@egg.com", avatar: "https://pr.sssagent.com/img/a1.png"}
  });

  //SETS INITIAL DATA FROM DATABASE

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

  //BOOK MAKE A NEW BOOKING
  function bookSpot(carId, spotId, startTime, endTime) {
    return axios
    .post('/api/bookings', {
      car_id: carId,
      spot_id: spotId,
      start_datetime: startTime,
      end_datetime: endTime
    })
    .then(res => {
      Promise.all([
      axios.get("/api/bookings/renter"),
      axios.get("/api/bookings/owner")
      ])
    })
    .then(all => { 
      const renterBookings = all[0].data
      const ownerBookings = all[1].data
      const newRenterBookings = Object.keys(renterBookings).map(key => {return renterBookings[key]})
      const newOwnerBookings = Object.keys(ownerBookings).map(key => {return ownerBookings[key]})
      setState({ ...state, renterbookings: [ ...newRenterBookings], ownerbookings: [ ...newOwnerBookings]})
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
      setState({ ...state, renterbookings: [ ...newRenterBookings], ownerbookings: [ ...newOwnerBookings]})
    })
    .catch(err => console.log(err))
  }

  //ADD A NEW CAR - fix needed: says setState is not a function... 

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
      setState({ ...state, cars: newCarArr})
    })
    .catch(err => console.log(err))
  }

  //DELETE A CAR 

  function deleteCar(id) {
    const newCars = state.cars.filter(car => car.id !== id)
    return axios
    .delete(`/api/cars/${id}`, {})
    .then(res => {
      setState({ ...state, cars: [ ...newCars]})
    })
    .catch(err => console.log(err))
  }

  //ADD A NEW SPOT - fix needed: same issue as adding new car
  function addSpot (userid, street_address, city, province, country, postal_code, picture, price){
    return axios
      .post('/api/spots', {
        id: userid,
        street_address,
        city,
        province,
        country,
        postal_code,
        picture,
        price
      })
      .then(res => {
        axios.get("/api/spots")
      })
      .then(res => { 
        console.log("Do it make it to this stage of addSpot")
        const spots = res.data
        const newSpots = Object.keys(spots).map(key => {return spots[key]})
        setState({ ...state, spots: [ ...newSpots]})
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
              />
            </Route>
            <Route exact path="/mybookings"> 
              <RenterD_myBookings 
                user={state.user} 
                bookingsR={state.renterbookings} 
                cancelBooking={cancelBooking}/> 
            </Route>
            <Route exact path="/mybookmarks">
              My Bookmarks : ID
            </Route>
            <Route exact path="/mycars">
              <RenterD_myCars 
                user={state.user}
                cars={state.cars}
                deleteCar={deleteCar}/>
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
              spots={state.spots}/>
            </Route>
            <Route exact path="/addnewspot">
              <OwnerD_RegisterSpots 
              user={state.user} 
              addSpot={addSpot}/>
            </Route>
          </Switch>
      
      </div>

    );
  
}