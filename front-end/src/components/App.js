import React, { Component } from 'react';
import axios from 'axios';

import './App.scss';
import { Typography, Button } from '@material-ui/core';

import TopBar from './TopBar';
import SearchBar from './SearchBar';
import SearchResult from './SearchResult';

class App extends Component {

  /* for fetch data 
  constructor(props) {
    super(props)
    this.state = {
      message: 'Hi! Click the button to load data!'
    }
  }

  fetchData = () => {
    axios.get('/api/spots') // You can simply make your requests to "/api/whatever you want"
    .then((response) => {
      // handle success
      console.log(response.data) // The entire response from the Rails API
      const onespot = response.data["1"].street_address
      const printdata = JSON.stringify(onespot)
      // console.log(response.data.message) // Just the message
      this.setState({
         message: printdata
       });
    }) 
  }
*/
  render() {
    return (

      <div className="main">
   
          
{/* 
          <Typography variant="body1">
            {this.state.message }
          </Typography>
            
          <Button variant="contained" color="primary" onClick={this.fetchData}>
            Fetch Data : street_address of id:1 
          </Button>     */}
          
          <TopBar />
          <SearchBar />
          <SearchResult />
      </div>

    );
  }
}

export default App;
