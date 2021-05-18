import React, { useState, useEffect } from 'react';

import UserNameDisplay from './UserNameDisplay';
import SpotRating from './SpotRating';
//import style & material-ui 
import './Dashboad.scss';
import './Popup.scss';
import { Button, Typography, Divider, ListItem, ListItemText} from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionActions from '@material-ui/core/AccordionActions';
import Rating from '@material-ui/lab/Rating';
import Paper from '@material-ui/core/Paper';
import Collapse from '@material-ui/core/Collapse';
//import hooks & helper
import useDisplayAction from "../hooks/useDisplayAction"
import  { openEmail } from '../helpers/helper'
import { getRenterBookings, getHistory, getRenterBookmarks, checkBookmarkedspot, getRentersRatings, spotRated } from '../helpers/selector';



export default function RenterD_myBookings(props) {

  //get this renter's booking list from helper function
  const thisUserBookings = getRenterBookings(props.user.id, props.bookingsR)
  const dividedBooking = getHistory(thisUserBookings)
  const activeBooking = dividedBooking[0]
  const historyBooking = dividedBooking[1]

  //get this renter's bookmared list from helper function
  const thisUserBookmarks = getRenterBookmarks(props.user.id, props.bookmarks)

  //list open-close & pop up working with this - from the hook
  const { expanded, setExpanded, handleChange, checked, setChecked, handleCheckout } = useDisplayAction();
  
  //Controls state for cancel booking confirmation message
  const [confirm, setConfirm] = useState(false)
  const [currentSpot, setCurrentSpot] = useState(null)

  //rating popup submit
  function submitRating(spot_id) {
    setCurrentSpot(spot_id)
    handleCheckout()
  }

//axios functions
  function cancel (bookingId) {
    props.cancelBooking(bookingId)
    setConfirm(false)
  }

  function setBookmark(spotId, ownerid, ownerfn, ownerln, ownerem, avatar, streetadd, city, province, country, price, picture, postal_code, rating) {
    props.bookmarkSpot(props.user.id, spotId, ownerid, ownerfn, ownerln, ownerem, avatar, streetadd, city, province, country, price, picture, postal_code, rating)
  }

  //iterate each active booking
  const displayActiveBookings = () => {
    const print = [];
    
    for (const bookObj of activeBooking) {
      const num = activeBooking.indexOf(bookObj)+1;

      const startDateArr = bookObj.start_date_time.split("T")
      const endDateArr = bookObj.end_date_time.split("T")
 
      print.push(
        <Accordion key={num} square={false} expanded={expanded === `panel${num}`} onChange={handleChange(`panel${num}`)} className="Accbox">
        <AccordionSummary aria-controls={`panel${num}d-content`} id={`panel${num}d-header`}>
          <Typography variant="h6">{bookObj.spot.street_address}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ListItemText>Start: {startDateArr[0]} at {startDateArr[1].substring(0,5)}</ListItemText>
          <ListItemText>End: {endDateArr[0]} at {endDateArr[1].substring(0,5)}</ListItemText>
          <ListItemText>Spot Owner:</ListItemText>
          <UserNameDisplay user={bookObj.owner}/>
          
        </AccordionDetails>
          {!confirm &&
          <AccordionActions>
          <Button variant="contained" onClick={()=> openEmail(bookObj.owner.owner_email)}>Contact Owner</Button>
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

  //iterate each active booking
  const displayHistoryBookings = () => {
    const print = [];
    const reversedHistory = historyBooking.reverse()
    for (const bookObj of reversedHistory) {
      const num = activeBooking.length + reversedHistory.indexOf(bookObj)+1;

      const startDateArr = bookObj.start_date_time.split("T")
      const endDateArr = bookObj.end_date_time.split("T")

      const bookmarked = checkBookmarkedspot(bookObj.spot.spot_id, thisUserBookmarks)
      const rated = spotRated(bookObj.spot.spot_id, props.user.id, props.ratings)
      const rating = getRentersRatings(bookObj.spot.spot_id, props.user.id, props.ratings)

      print.push(
        <Accordion key={num} square={false} expanded={expanded === `panel${num}`} onChange={handleChange(`panel${num}`)} className="Accbox">
        <AccordionSummary aria-controls={`panel${num}d-content`} id={`panel${num}d-header`}>
          <Typography variant="h6">{bookObj.spot.street_address}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ListItemText>Start: {startDateArr[0]} at {startDateArr[1].substring(0,5)}</ListItemText>
          <ListItemText>End: {endDateArr[0]} at {endDateArr[1].substring(0,5)}</ListItemText>
          <ListItemText>Spot Owner:</ListItemText>
          <UserNameDisplay user={bookObj.owner}/>
          
        </AccordionDetails>
        <AccordionActions>

        {rated === false &&
        <div>
          <Button variant="contained" color="primary" onClick={() => submitRating(bookObj.spot.spot_id)}>
            Rate this Spot
          </Button>
                
         <Collapse in={checked}>
          <Paper className="popup_rating">
          <SpotRating id={num} spot_id={currentSpot} rateSpot={props.rateSpot} user={props.user}  handleCheckout={handleCheckout}/>
          </Paper>
        </Collapse>
        </div>
        }
        {rated === true &&
          <Rating name="read-only" value={rating} readOnly size="large" />  
        }
        {bookmarked === true && 
          <Button variant="contained" disabled >Bookmarked</Button>}
        {bookmarked === false &&  
          <Button variant="contained" onClick={() => setBookmark(bookObj.spot.spot_id, bookObj.owner.user_id, bookObj.owner.first_name, bookObj.owner.last_name, bookObj.owner.owner_email, bookObj.owner.avatar, bookObj.spot.street_address, bookObj.spot.city, bookObj.spot.province, bookObj.spot.country, bookObj.spot.price, bookObj.spot.picture, bookObj.spot.postal_code, bookObj.rating)}>Bookmark</Button> } 
        </AccordionActions>
      </Accordion>

      )
    }
    return print;
  };



  return (
    <div className="wrap_dashboard">
      <Typography variant="h5" className="page_title">Renter Dashboard - My booking list</Typography>

      <Typography variant="h5" className="page_title">Active Booking</Typography>
      {displayActiveBookings()}

      <Divider />

      <Typography variant="h5" className="page_title">History</Typography>
      {displayHistoryBookings()}

      
    
    </div>
  );
}




