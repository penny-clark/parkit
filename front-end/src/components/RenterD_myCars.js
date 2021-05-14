import React, { useState, useEffect } from 'react';
import axios from 'axios';

//import style & material-ui 
import './RenterDashboad.scss';
import { Button, Typography, Divider} from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionActions from '@material-ui/core/AccordionActions';

import { bookings } from '../data_obj';

export default function RenterD_myCars(props) {

  const user = props.user;
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

  
  const [expanded, setExpanded] = React.useState('panel1');

  function cancel (bookingId) {
    console.log("clicked cancel button, this is bookingId", bookingId)
    props.cancelBooking(bookingId)
  }

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  // iterate each booking

  const displayBookings = () => {
    const print = [];
    console.log(thisUserBookings)
    for (const bookObj of thisUserBookings) {
      const num = thisUserBookings.indexOf(bookObj)+1;
      const title = bookObj.spot.street_address;
      print.push(
        <Accordion square={false} expanded={expanded === `panel${num}`} onChange={handleChange(`panel${num}`)} className="Accbox">
        <AccordionSummary aria-controls={`panel${num}d-content`} id={`panel${num}d-header`}>
          <Typography variant="h6">{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
         Start : {bookObj.start_date_time} <br />
         End : {bookObj.end_date_time}
          </Typography>
        </AccordionDetails>
        <AccordionActions>
          <Button >Contact Owner</Button>
          <Button color="secondary" onClick={() => cancel(bookObj.id)}>
            Cancel This Booking
          </Button>
        </AccordionActions>
      </Accordion>
      )
    }
    return print;
  };


  return (
    <div>
      <Typography variant="body1">
      This is "Renter Dashbard - My booking list" of user : {user.first_name} 
      </Typography>
   
      {displayBookings()}
    
    </div>
  );
}




