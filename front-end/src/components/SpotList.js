import React, {useState}from "react";
import './SpotListItem.scss';
import './Popup.scss';
import BookingPopup from "./BookingPopup";
import useDisplayAction from "../hooks/useDisplayAction"
import { Button, Typography, Grid, ListItem, List, Box} from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionActions from '@material-ui/core/AccordionActions';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import Rating from '@material-ui/lab/Rating';
import Paper from '@material-ui/core/Paper';
import Collapse from '@material-ui/core/Collapse';

export default function SpotList(props) {

  const { expanded, setExpanded, handleChange } = useDisplayAction();
  const { checked, setChecked, handleCheckout } = useDisplayAction();

  console.log(props.spots, "spots from user bookmarks")


  const spotsmap = props.spots.map(spot => {

    const num = props.spots.indexOf(spot) + 1;

    return(
    < div key={num} className="spotlist_wrap" >
        
      <Accordion square={false} expanded={expanded === `panel${num}`} onChange={handleChange(`panel${num}`)} className="Accbox">
      <AccordionSummary aria-controls={`panel${num}d-content`} id={`panel${num}d-header`}>
        <ListItem> 
          <LocationOnIcon />
          <Typography variant="h6">{spot.street_address}</Typography>
        </ListItem> 
        <ListItem > 
          <MonetizationOnIcon />
          <Typography variant="h6">{Math.floor(spot.price)}</Typography>
          <Typography variant="body1"> / hour</Typography>
        </ListItem>
        <ListItem edge="end">  
          <Rating name="read-only" value={spot.rating} readOnly/>
        </ListItem>
      </AccordionSummary>

      <AccordionDetails>
      <img src={spot.picture} height="300px"/>
      <Typography>
       Owner: {spot.owner.first_name} {spot.owner.last_name}
      </Typography>
    </AccordionDetails>
    <AccordionActions>
      <Button variant="contained">Contact Owner</Button>
      <Button variant="contained" color="secondary" onClick={handleCheckout}>
        Book this spot
      </Button>
      
      <Collapse in={checked}>
          <Paper className="popup_checkout">
            <BookingPopup spot={spot} checked={checked} setChecked={setChecked} bookSpot={props.bookSpot} user={props.user}/>
          </Paper>
      </Collapse>

    </AccordionActions>
  </Accordion>
  </div>
  )

  });
  return spotsmap ;


}