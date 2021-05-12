import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, useParams } from 'react-router-dom';

//import style & material-ui 
import './TopBar.scss';
import { Button, Typography, Link, Avatar, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import { Grid, Divider} from '@material-ui/core';

//import test data
import { bookings } from '../data_obj';


export default function RenterD_myBookings(props) {

  const user = props.user

  const myBookings = []

  const getRenterData = () => {
    for ( const item of bookings) {
      if (item.car_id === user.car_id) {
        myBookings.push(item)
      }
    }
    console.log(myBookings)
    return myBookings;
  }

  return (
   
      <Typography variant="body1">
      This is My booking list page of user id : {user.first_name} 
     
      </Typography>
 
  );
}




