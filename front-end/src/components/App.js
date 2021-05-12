import React, { Component, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, useParams } from 'react-router-dom';

import './App.scss';
import { Typography, Button } from '@material-ui/core';

import TopBar from './TopBar';
import SearchBar from './SearchBar';
import SearchResult from './SearchResult';
import RenterD_myBookings from './RenterD_myBookings';


class App extends Component {

  state = {
    user_id: 1,
    first_name: "Eggert",
    last_name: "Eggerson",
    owner_email: "egg@egg.com",
    avatar: "https://pr.sssagent.com/img/a1.png",
    spot_id: 1,
    car_id: 1
  }

  render() {
    return (

      <div className="main">

          <TopBar user={this.state}/>

         
    < Router>
      <Switch>
        <Route exact path="/"> <SearchBar />, <SearchResult /> </Route>
        <Route exact path="/mybookings"> <RenterD_myBookings user={this.state}/> </Route>
        <Route exact path="/mybookmarks">My Bookmarks : ID</Route>
        <Route exact path="/mycars">My Cars : ID</Route>
        <Route exact path="/addnewcar">Add a Car : ID</Route>
      </Switch>
    </Router>
      </div>

    );
  }
}

export default App;
