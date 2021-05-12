import React, { Component } from 'react';
import axios from 'axios';

import './App.scss';
import { Typography, Button } from '@material-ui/core';

import TopBar from './TopBar';
import SearchBar from './SearchBar';
import SearchResult from './SearchResult';

class App extends Component {

  
  render() {
    return (

      <div className="main">

          <TopBar />
          <SearchBar />
          <SearchResult />
      </div>

    );
  }
}

export default App;
