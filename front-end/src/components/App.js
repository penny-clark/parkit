import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './App.scss';
import { Typography, Button } from '@material-ui/core';

import TopBar from './TopBar';
import SearchBar from './SearchBar';
import { Search } from '@material-ui/icons';
import SpotList from './SpotList';

export default function App(props) {

  const [state, setState] = useState({
    spots: []
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




  // fetchData = () => {
  //   axios.get('/api/spots') // You can simply make your requests to "/api/whatever you want"
  //   .then((response) => {
  //     // handle success
  //     console.log(response.data) // The entire response from the Rails API
  //     const onespot = response.data["1"].street_address
  //     const printdata = JSON.stringify(onespot)
  //     console.log(response.data)
  //     // console.log(response.data.message) // Just the message
  //     this.setState({
  //        message: printdata
  //      });
  //   }) 




    return (

      <div className="main">
   
          <TopBar />

          <Typography variant="body1">
          </Typography>
             

          <SearchBar />

          <SpotList
          spots={state.spots}
          />

      </div>

    );
  }

