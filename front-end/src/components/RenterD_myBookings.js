import React, { useState, useEffect } from 'react';

import UserNameDisplay from './UserNameDisplay';
//import style & material-ui 
import './RenterDashboad.scss';
import { Button, Typography, Divider, ListItem, ListItemText} from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionActions from '@material-ui/core/AccordionActions';
//import hooks & helper
import useDisplayAction from "../hooks/useDisplayAction"
import { getRenterBookings } from '../helpers/selector';

export default function RenterD_myBookings(props) {

  //get this owner's booked schedule list from helper function
  const thisUserBookings = getRenterBookings(props.user.car_id, props.bookingsR)

  //list open-close working with this - from the hook
  const { expanded, setExpanded, handleChange} = useDisplayAction();

  function cancel (bookingId) {
    console.log("clicked cancel button, this is bookingId", bookingId)
    props.cancelBooking(bookingId)
  }

  // iterate each booking
  const displayBookings = () => {
    const print = [];
    
    for (const bookObj of thisUserBookings) {
      const num = thisUserBookings.indexOf(bookObj)+1;
 
      print.push(
        <Accordion key={num} square={false} expanded={expanded === `panel${num}`} onChange={handleChange(`panel${num}`)} className="Accbox">
        <AccordionSummary aria-controls={`panel${num}d-content`} id={`panel${num}d-header`}>
          <Typography variant="h6">{bookObj.spot.street_address}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ListItemText>Start : {bookObj.start_date_time}</ListItemText>
          <ListItemText>End : {bookObj.end_date_time}</ListItemText>
          <ListItemText>Spot Owner:</ListItemText>
          <UserNameDisplay user={bookObj.owner}/>
          
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
    <div className="wrap_dashboard">
      <Typography variant="body1">
      This is "Renter Dashbard - My booking list" of user : {props.user.first_name} 
      </Typography>
   
      {displayBookings()}
    
    </div>
  );
}




