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


    return (

      <div className="main">
   
          <TopBar />

          <SearchBar />

          <SpotList
          spots={state.spots}
          />

      </div>

    );
  }

