import React, { useState, useEffect } from 'react';
import axios from 'axios';

//import style & material-ui 
import './RenterDashboad.scss';
import { Button, Typography, Divider} from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionActions from '@material-ui/core/AccordionActions';
//import hooks
import useDisplayAction from "../hooks/useDisplayAction"

export default function RenterD_myBookings(props) {

  const bookings = props.bookingsR;
  const thisUserBookings = [];   // array of booking obj of this user

  const getBookings = () => {
  
    for (const item of bookings) {
      if(item.car_id === props.user.car_id) {
        thisUserBookings.push(item)
      }
    }
   return thisUserBookings;
  }

  getBookings();

  const { expanded, setExpanded, handleChange} = useDisplayAction();

  

  // iterate each booking

  const displayBookings = () => {
    const print = [];
  //  console.log(thisUserBookings)
    
    for (const bookObj of thisUserBookings) {
      const num = thisUserBookings.indexOf(bookObj)+1;
 

      print.push(
        <Accordion key={num} square={false} expanded={expanded === `panel${num}`} onChange={handleChange(`panel${num}`)} className="Accbox">
        <AccordionSummary aria-controls={`panel${num}d-content`} id={`panel${num}d-header`}>
          <Typography variant="h6">{bookObj.spot.street_address}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
         Start : {bookObj.start_date_time} <br />
         End : {bookObj.end_date_time}
          </Typography>
        </AccordionDetails>
        <AccordionActions>
          <Button >Contact Owner</Button>
          <Button color="secondary">
            Cancel
          </Button>
        </AccordionActions>
      </Accordion>
      )
    }
    return print;
  };


  return (
    <div className="wrap_dashboard">
      <Typography variant="body1">
      This is "Renter Dashbard - My booking list" of user : {props.user.first_name} 
      </Typography>
   
      {displayBookings()}
    
    </div>
  );
}




