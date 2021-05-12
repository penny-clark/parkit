import React, { Component, useState } from 'react';
import axios from 'axios';

import './App.scss';
import { Typography, Button } from '@material-ui/core';

import TopBar from './TopBar';
import SearchBar from './SearchBar';
import SearchResult from './SearchResult';

class App extends Component {

  state = {
    user_id: 1,
    first_name: "Eggert",
    last_name: "Eggerson",
    owner_email: "egg@egg.com",
    avatar: "https://pr.sssagent.com/img/a1.png"
  }

  render() {
    return (

      <div className="main">

          <TopBar user={this.state}/>

          <SearchBar />
          <SearchResult />
      </div>

    );
  }
}

export default App;
