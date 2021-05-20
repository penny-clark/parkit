import React, { useState } from 'react';
//import style & material-ui 
import './Dashboad.scss';
import { Button, Typography, ListItem, ListItemText, ListItemAvatar, Avatar} from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionActions from '@material-ui/core/AccordionActions';
import AccessAlarmRoundedIcon from '@material-ui/icons/AccessAlarmRounded';
import LocalOfferRoundedIcon from '@material-ui/icons/LocalOfferRounded';
import DriveEtaRoundedIcon from '@material-ui/icons/DriveEtaRounded';
import ColorLensRoundedIcon from '@material-ui/icons/ColorLensRounded';
import MoreRoundedIcon from '@material-ui/icons/MoreRounded';
//import hooks & helper
import useDisplayAction from "../hooks/useDisplayAction";
import  { openEmail } from '../helpers/helper'
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

   //Controls state for cancel booking confirmation message
   const [confirm, setConfirm] = useState(false)

  function cancel (bookingId) {
    props.cancelBooking(bookingId)
    setConfirm(false)
  }

  // iterate each active booking
  const displayActiveBookings = () => {
    const print = [];
    
    for (const bookObj of activeBooking) {
      const num = activeBooking.indexOf(bookObj)+1;

      // const startDateArr = bookObj.start_date_time.split("T")
      // const endDateArr = bookObj.end_date_time.split("T")

      print.push(
        <Accordion key={num} square={false} expanded={expanded === `panel${num}`} onChange={handleChange(`panel${num}`)} className="Accbox">
         <AccordionSummary aria-controls={`panel${num}d-content`} id={`panel${num}d-header`}>

         <ListItem>
             <ListItemAvatar>
             <Avatar alt="user_name" src={bookObj.renter.avatar} /> 
             </ListItemAvatar>
              <ListItemText className="userName2">
              {bookObj.renter.first_name} {bookObj.renter.last_name}
              </ListItemText>
            </ListItem>
            <ListItem>
          <Typography variant="body1">My spot: {bookObj.street_address}</Typography>
          </ListItem>
  
         </AccordionSummary>
        <AccordionDetails>
          <div className="flexline_around">
             <div className="flexline">
               Start <AccessAlarmRoundedIcon />
                <p className="innerTextP">  {bookObj.start_string}</p>
            </div>
            <div className="flexline">
              End <AccessAlarmRoundedIcon />
            <p className="innerTextP"> {bookObj.end_string}</p>
            </div>
          </div>
          <br></br>
          <ListItemText className="textBG">Renter Car Info</ListItemText>
          <div className="carinfo">
            <div className="flexline">
              <LocalOfferRoundedIcon /> Make: {bookObj.car.car_make}
            </div>
            <div className="flexline">
            <DriveEtaRoundedIcon /> &nbsp; Model: {bookObj.car.model}
            </div>
            <div className="flexline">
            <ColorLensRoundedIcon />&nbsp; Colour: {bookObj.car.colour}
            </div>
            <div className="flexline">
              <MoreRoundedIcon />&nbsp; License plate: {bookObj.car.plate_number}
            </div>
          </div>
        </AccordionDetails>
        {!confirm &&
          <AccordionActions>
          <Button variant="contained" onClick={()=> openEmail(bookObj.renter.renter_email)}>Contact Renter</Button>
          <Button variant="contained" color="secondary" onClick={() => setConfirm(true)}>
            Cancel
          </Button>
          </AccordionActions>
          }
          {confirm && 
          <AccordionActions>
          <Button variant="contained" onClick={() => cancel(bookObj.id)}>Yes, I want to cancel this booking</Button>
          <Button variant="contained" color="secondary" onClick={() => setConfirm(false)}>Back</Button>
          </AccordionActions>
          }
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

      // const startDateArr = bookObj.start_date_time.split("T")
      // const endDateArr = bookObj.end_date_time.split("T")
 
      print.push(
        <Accordion key={num} square={false} expanded={expanded === `panel${num}`} onChange={handleChange(`panel${num}`)} className="Accbox">
        <AccordionSummary aria-controls={`panel${num}d-content`} id={`panel${num}d-header`}>
  
          <ListItem>
             <ListItemAvatar>
             <Avatar alt="user_name" src={bookObj.renter.avatar} /> 
             </ListItemAvatar>
              <ListItemText className="userName2">
              {bookObj.renter.first_name} {bookObj.renter.last_name}
              </ListItemText>
            </ListItem>
       
        
          <ListItem>
          <Typography variant="body1">My spot: {bookObj.street_address}</Typography>
          </ListItem>
        </AccordionSummary>
        <AccordionDetails>
          <div className="flexline_around">
             <div className="flexline">
               Start <AccessAlarmRoundedIcon />
                <p className="innerTextP">  {bookObj.start_string}</p>
            </div>
            <div className="flexline">
              End <AccessAlarmRoundedIcon />
            <p className="innerTextP"> {bookObj.end_string}</p>
            </div>
          </div>

          <br></br>
          <ListItemText className="textBG">Renter Car Info</ListItemText>
          <div className="carinfo">
            <div className="flexline">
              <LocalOfferRoundedIcon /> Make: {bookObj.car.car_make}
            </div>
            <div className="flexline">
            <DriveEtaRoundedIcon /> &nbsp; Model: {bookObj.car.model}
            </div>
            <div className="flexline">
            <ColorLensRoundedIcon />&nbsp; Colour: {bookObj.car.colour}
            </div>
            <div className="flexline">
              <MoreRoundedIcon />&nbsp; License plate: {bookObj.car.plate_number}
            </div>
          </div>
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
      <h5 className="page_title">My Spots Booking Schedule</h5>
      <Typography variant="h6" className="page_title">Active Booked Schedule</Typography>
      
      <div className="booklist_wrap">
      {displayActiveBookings()}
      </div>
      
      <Typography variant="h6" className="page_title">History</Typography>
      <div className="booklist_wrap history">
      {displayHistoryBookings()}
      </div>
      
    
    </div>
  );
}




