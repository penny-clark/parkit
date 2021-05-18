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
import  { openEmail } from '../helpers/helper'
import MapView from "./MapView.jsx";

export default function SpotList(props) {

  //const { expanded, setExpanded, handleChange } = useDisplayAction();
  const { checked, setChecked, handleCheckout } = useDisplayAction();

  const [expanded, setExpanded] = useState(null);

  const [showMap, setShowMap] = useState(true);
  
  function selectSpot(price) {
    handleCheckout()
    if(!isNaN(props.endTime - props.startTime) && (props.endTime - props.startTime) !== 0) {
    props.setTotalCost(`Total: $${((Math.round(props.endTime - props.startTime) / 60000) / 15 * (price.toFixed(2) / 4)).toFixed(2)}`)
    }
  }

    const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
    console.log(panel)
  };

  function openlayer(id) {
    // document.querySelector(`#spot3 .MuiPaper-root div.MuiButtonBase-root`).style.ariaExpaned = "true";
    setExpanded(`panel${id}`)
    //  console.log(id, "are you working?")
    window.location = `http://localhost:3000/#spot${id}`
  }


  function back() {
    props.setKeyword("")
    setShowMap(true)
  }

  const spotsmap = () => {

    const print=[];

    for (const spot of props.spots) {

    const num = props.spots.indexOf(spot) + 1;

    print.push(
    < div key={num} id={`spot${spot.id}`} className="spotlist_wrap" >
        
      <Accordion square={false} expanded={expanded === `panel${spot.id}`} onChange={handleChange(`panel${spot.id}`)} className="Accbox">
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
          <Rating name="read-only" value={spot.rating} readOnly size="large" />
        </ListItem>
      </AccordionSummary>

      <AccordionDetails>
      <img src={spot.picture} height="300px"/>
      <Typography>
       Owner: {spot.owner.first_name} {spot.owner.last_name}
      </Typography>
    </AccordionDetails>
    <AccordionActions>
      <Button variant="contained" onClick={()=> openEmail(spot.owner.email)}>Contact Owner</Button>
      <Button variant="contained" color="secondary" onClick={() => selectSpot(spot.price)}>
        Book this spot
      </Button>
      <Button variant="contained" onClick={() => back()}>Return to search</Button>
      
      <Collapse in={checked}>
          <Paper className="popup_checkout">
            <BookingPopup spot={spot} checked={checked} setChecked={setChecked} bookSpot={props.bookSpot} user={props.user} startTime={props.startTime} endTime={props.endTime} setStartTime={props.setStartTime} setEndTime={props.setEndTime} totalCost={props.totalCost} setTotalCost={props.setTotalCost}/>
          </Paper>
      </Collapse>

    </AccordionActions>
  </Accordion>
  </div>
    
  )}
    
  return print ;
    }
  
    return (
    <div>
      {showMap &&
      <MapView spots={props.spots} user={props.user} openlayer={openlayer} setKeyword={props.setKeyword} setShowMap={setShowMap}/>
      }
    {spotsmap()} 
    </div>
    )

}