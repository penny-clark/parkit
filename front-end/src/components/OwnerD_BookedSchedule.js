import React, { useState, useEffect } from 'react';

import UserNameDisplay from './UserNameDisplay';
//import style & material-ui 
import './RenterDashboad.scss';
import { Button, Typography, Divider, ListItem} from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionActions from '@material-ui/core/AccordionActions';
//import hooks & helper
import useDisplayAction from "../hooks/useDisplayAction";
import { getOwnerBookings, getOwnerSpots } from '../helpers/selector';

export default function OwnerD_BookedSchedule(props) {

  //get this owner's booked schedule list from helper function
  const thisUserBookings = getOwnerBookings(props.user.id, props.bookingsO)
  //get this owner's spot's address array to display
  const thisUserSpots = getOwnerSpots(props.user.id, props.spots)
  
  //list open-close working with this - from the hook
  const { expanded, setExpanded, handleChange} = useDisplayAction();

  function cancel (bookingId) {
    props.cancelBooking(bookingId)
  }

  // iterate each booking
  const displayBookings = () => {
    const print = [];
    
    for (const bookObj of thisUserBookings) {
      const num = thisUserBookings.indexOf(bookObj)+1;

      const startDateArr = bookObj.start_date_time.split("T")
      const endDateArr = bookObj.end_date_time.split("T")

      print.push(
        <Accordion key={num} square={false} expanded={expanded === `panel${num}`} onChange={handleChange(`panel${num}`)} className="Accbox">
        <AccordionSummary aria-controls={`panel${num}d-content`} id={`panel${num}d-header`}>
   
          <UserNameDisplay user={bookObj.renter}/>
 
        <ListItem>
        <Typography variant="body1">Spot:{thisUserSpots[0]}</Typography>
        </ListItem>
          
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
         Start: {startDateArr[0]} at {startDateArr[1].substring(0,5)} <br />
         End: {endDateArr[0]} at {endDateArr[1].substring(0,5)}
          </Typography>
        </AccordionDetails>
        <AccordionActions>
          <Button >Contact Renter</Button>
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
      This is "Owner Dashbard - Booked Schedule list" of user : {props.user.first_name} 
      </Typography>
   
      {displayBookings()}
    
    </div>
  );
}




