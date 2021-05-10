import React, { Component } from 'react';
import axios from 'axios';
import './App.scss';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import TopBar from "./TopBar";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: 'Hi! Click the button to load data!'
    }
  }

  fetchData = () => {
    axios.get('/api/data') // You can simply make your requests to "/api/whatever you want"
    .then((response) => {
      // handle success
      console.log("hello")
      console.log(response.data) // The entire response from the Rails API

      console.log(response.data.message) // Just the message
      this.setState({
        message: response.data.message
      });
    }) 
  }

  render() {
    return (

      <div className="main">
        <TopBar />

        <Typography variant="h2">
          {this.state.message }
        </Typography>
          
        <Button variant="contained" color="primary" onClick={this.fetchData}>
          Fetch Data 
        </Button>       
      </div>

    );
  }
}

export default App;
