import React from "react";
import './SpotListItem.scss';
import './Popup.scss';
import BookingPopup from "./BookingPopup";
import useDisplayAction from "../hooks/useDisplayAction"
import { Button, Typography } from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionActions from '@material-ui/core/AccordionActions';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import Rating from '@material-ui/lab/Rating';
import Paper from '@material-ui/core/Paper';
import Collapse from '@material-ui/core/Collapse';
import  { openEmail } from '../helpers/helper'
import UserNameDisplay from './UserNameDisplay';

export default function SpotList(props) {

  //const { expanded, setExpanded, handleChange } = useDisplayAction();
  const { checked, setChecked, handleCheckout } = useDisplayAction();

    const handleChange = (panel) => (event, newExpanded) => {
    props.setExpanded(newExpanded ? panel : false);
   
  };

  const spotsmap = () => {

    const print=[];

    for (const spot of props.spots) {

    const num = props.spots.indexOf(spot) + 1;

    print.push(
      
    < div key={num} className="spotlist_wrap" id={`spot${spot.id}`} >
       
      <Accordion square={false} expanded={props.expanded === `panel${spot.id}`} onChange={handleChange(`panel${spot.id}`)} className="Accbox">
      <AccordionSummary aria-controls={`panel${num}d-content`} id={`panel${num}d-header`}>
        <div className="flexline">
          <div className="streetName_title_list">
            <LocationOnIcon />
            <h6 className="title_text_h6">{spot.street_address}</h6>
          </div>
          <div className="price_title_list">
          <MonetizationOnIcon />
            <h6 className="title_text_h6">{Math.floor(spot.price)}</h6>
            <Typography variant="body1"> / hour</Typography>
          </div>
     
          <Rating className="self_right" name="read-only" value={Number(spot.rating)} readOnly />
        </div> 
      </AccordionSummary>

      <AccordionDetails>
      <img src={spot.picture} className="spot_picture" alt="spot"/>
      <br />
        <Typography variant="body1">Spot Owner:</Typography>
        <UserNameDisplay user={spot.owner}/>
      
    </AccordionDetails>
    <AccordionActions>
      <Button variant="contained" onClick={()=> openEmail(spot.owner.email)}>Contact Owner</Button>
      <Button variant="contained" color="secondary" onClick={() => handleCheckout()}>
        Book this spot
      </Button>
      <Button onClick={()=> props.closeLayer()}>Go to Map Search</Button>

      <Collapse in={checked}>
          <Paper className="popup_checkout">
            <BookingPopup spot={spot} 
            checked={checked} 
            setChecked={setChecked} 
            bookSpot={props.bookSpot} 
            user={props.user} 
            startTime={props.startTime} 
            endTime={props.endTime} 
            setStartTime={props.setStartTime} 
            setEndTime={props.setEndTime} 
            />
          </Paper>
      </Collapse>

    </AccordionActions>
  </Accordion>
    
  </div>

  )}
    
  return print ;
    }
  

  return (
    <div className="listview_wrap">
    {spotsmap()} 
    </div>
  )

}