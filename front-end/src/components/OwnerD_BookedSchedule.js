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
import { getRenterBookings, getRenterSpots } from '../helpers/selector';

export default function OwnerD_BookedSchedule(props) {

  //get this owner's booked schedule list from helper function
  const thisUserBookings = getRenterBookings(props.user.id, props.bookingsO)
  //get this owner's spot's address array to display
  const thisUserSpots = getRenterSpots(props.user.id, props.spots)
  
  //list open/close working with this - from the hook
  const { expanded, setExpanded, handleChange} = useDisplayAction();

  // iterate each booking
  const displayBookings = () => {
    const print = [];
    
    for (const bookObj of thisUserBookings) {
      const num = thisUserBookings.indexOf(bookObj)+1;
 
      print.push(
        <Accordion key={num} square={false} expanded={expanded === `panel${num}`} onChange={handleChange(`panel${num}`)} className="Accbox">
        <AccordionSummary aria-controls={`panel${num}d-content`} id={`panel${num}d-header`}>
        <ListItem>
          <UserNameDisplay user={bookObj.renter}/>
        </ListItem>
        <ListItem>
        <Typography variant="body1">Spot:{thisUserSpots[0]}</Typography>
        </ListItem>
          
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
         Start : {bookObj.start_date_time} <br />
         End : {bookObj.end_date_time}
          </Typography>
        </AccordionDetails>
        <AccordionActions>
          <Button >Contact Renter</Button>
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
      This is "Owner Dashbard - Booked Schedule list" of user : {props.user.first_name} 
      </Typography>
   
      {displayBookings()}
    
    </div>
  );
}




