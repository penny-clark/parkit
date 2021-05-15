import React, { useState, useEffect } from 'react';

import UserNameDisplay from './UserNameDisplay';
//import style & material-ui 
import './RenterDashboad.scss';
import './Popup.scss';
import { Button, Typography, Divider, ListItem, ListItemText} from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionActions from '@material-ui/core/AccordionActions';
import Rating from '@material-ui/lab/Rating';
import Popover from '@material-ui/core/Popover';
//import hooks & helper
import useDisplayAction from "../hooks/useDisplayAction"
import { getRenterBookings, getHistory, getRenterBookmarks, checkBookmarkedspot } from '../helpers/selector';



export default function RenterD_myBookings(props) {

  //get this renter's booking list from helper function
  const thisUserBookings = getRenterBookings(props.user.id, props.bookingsR)
  const dividedBooking = getHistory(thisUserBookings)
  const activeBooking = dividedBooking[0]
  const historyBooking = dividedBooking[1]

  //get this renter's bookmared list from helper function
  const thisUserBookmarks = getRenterBookmarks(props.user.id, props.bookmarks)

  //list open-close working with this - from the hook
  const { expanded, setExpanded, handleChange} = useDisplayAction();

  //rating popup control
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const [value, setValue] = useState(2);

  function cancel (bookingId) {
    props.cancelBooking(bookingId)
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
        <AccordionActions>
          <Button variant="contained">Contact Owner</Button>
          <Button variant="contained" color="secondary" onClick={() => cancel(bookObj.id)}>
            Cancel
          </Button>
        </AccordionActions>
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

        {bookmarked === true && 
          <Button variant="contained" disabled >Bookmarked</Button>}
        {bookmarked === false &&  
          <Button variant="contained" onClick={() => setBookmark(bookObj.spot.spot_id, bookObj.owner.user_id, bookObj.owner.first_name, bookObj.owner.last_name, bookObj.owner.owner_email, bookObj.owner.avatar, bookObj.spot.street_address, bookObj.spot.city, bookObj.spot.province, bookObj.spot.country, bookObj.spot.price, bookObj.spot.picture, bookObj.spot.postal_code, bookObj.rating)}>Bookmark</Button> } 

          <Button aria-describedby={id} variant="contained" color="primary" onClick={handleClick}>
            Rate this Spot
          </Button>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center'}}
            transformOrigin={{ vertical: 'top', horizontal: 'center'}}
          >
            <Rating
              name={`rating${num}`}
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
            }}
          />
          </Popover>


        </AccordionActions>
      </Accordion>

      )
    }
    return print;
  };



  return (
    <div className="wrap_dashboard">
      <Typography variant="body1">
        Renter Dashboard - My booking list
      </Typography>

      <Typography variant="h5" className="page_title">Active Booking</Typography>
      {displayActiveBookings()}

      <Divider />

      <Typography variant="h5" className="page_title">History</Typography>
      {displayHistoryBookings()}

      
    
    </div>
  );
}




