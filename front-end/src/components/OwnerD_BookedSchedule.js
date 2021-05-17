import React, { useState, useEffect } from 'react';

import UserNameDisplay from './UserNameDisplay';
//import style & material-ui 
import './RenterDashboad.scss';
import { Button, Typography, Divider, ListItem, ListItemText, Grid} from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionActions from '@material-ui/core/AccordionActions';
//import hooks & helper
import useDisplayAction from "../hooks/useDisplayAction";
import { getOwnerBookings, getOwnerSpots, getHistory, findSpotAddress} from '../helpers/selector';

export default function OwnerD_BookedSchedule(props) {

  //get this owner's booked schedule list from helper function
  const thisUserBookings = getOwnerBookings(props.user.id, props.bookingsO)
  const dividedBooking = getHistory(thisUserBookings)
  const activeBooking = dividedBooking[0]
  const historyBooking = dividedBooking[1]

  //get this owner's spot's obj to get spot address for display
  const thisUserSpots = getOwnerSpots(props.user.id, props.spots)


  //list open-close working with this - from the hook
  const { expanded, setExpanded, handleChange} = useDisplayAction();

  function cancel (bookingId) {
    props.cancelBooking(bookingId)
  }

  // iterate each active booking
  const displayActiveBookings = () => {
    const print = [];
    
    for (const bookObj of activeBooking) {
      const num = activeBooking.indexOf(bookObj)+1;

      const startDateArr = bookObj.start_date_time.split("T")
      const endDateArr = bookObj.end_date_time.split("T")

      print.push(
        <Accordion key={num} square={false} expanded={expanded === `panel${num}`} onChange={handleChange(`panel${num}`)} className="Accbox">
         <AccordionSummary aria-controls={`panel${num}d-content`} id={`panel${num}d-header`}>

           <UserNameDisplay user={bookObj.renter}/>
          <ListItem>
          <Typography variant="body1"> {findSpotAddress(bookObj.spot_id, thisUserSpots)}</Typography>
          </ListItem>
  
         </AccordionSummary>
        <AccordionDetails>
        <ListItemText>Start: {startDateArr[0]} at {startDateArr[1].substring(0,5)}</ListItemText>
          <ListItemText>End: {endDateArr[0]} at {endDateArr[1].substring(0,5)}</ListItemText>
          <br></br>
          <ListItemText>Renter Car Info</ListItemText>
          <ListItemText>Make: {bookObj.car.car_make}</ListItemText>
          <ListItemText>Model: {bookObj.car.model}</ListItemText>
          <ListItemText>Colour: {bookObj.car.colour}</ListItemText>
          <ListItemText>License plate: {bookObj.car.plate_number}</ListItemText>

        </AccordionDetails>
        <AccordionActions>
          <Button variant="contained">Contact Renter</Button>
          <Button variant="contained" color="secondary" onClick={() => cancel(bookObj.id)}>
            Cancel This Booking
          </Button>
        </AccordionActions>
      </Accordion>
      )
    }
    return print;
  };


  //iterate each history booking
  const displayHistoryBookings = () => {
    const print = [];
    const reversedHistory = historyBooking.reverse()
    for (const bookObj of reversedHistory) {
      const num = activeBooking.length + reversedHistory.indexOf(bookObj)+1;

      const startDateArr = bookObj.start_date_time.split("T")
      const endDateArr = bookObj.end_date_time.split("T")
 
      print.push(
        <Accordion key={num} square={false} expanded={expanded === `panel${num}`} onChange={handleChange(`panel${num}`)} className="Accbox">
        <AccordionSummary aria-controls={`panel${num}d-content`} id={`panel${num}d-header`}>
        <UserNameDisplay user={bookObj.renter}/>
          <ListItem>
          <Typography variant="body1">{findSpotAddress(bookObj.spot_id, thisUserSpots)}</Typography>
          </ListItem>
        </AccordionSummary>
        <AccordionDetails>
          <ListItemText>Start: {startDateArr[0]} at {startDateArr[1].substring(0,5)}</ListItemText>
          <ListItemText>End: {endDateArr[0]} at {endDateArr[1].substring(0,5)}</ListItemText>
        </AccordionDetails>
        <AccordionActions>
        </AccordionActions>
      </Accordion>
      )
    }
    return print;
  };



  return (
    <div className="wrap_dashboard">
      <Typography variant="body1">
      This is "Owner Dashboard - Booked Schedule list" of user : {props.user.first_name} 
      </Typography>
   
      
      <Typography variant="h5" className="page_title">Active Booked Schedule</Typography>
      {displayActiveBookings()}

      <Divider />

      <Typography variant="h5" className="page_title">History</Typography>
      {displayHistoryBookings()}
    
    </div>
  );
}




