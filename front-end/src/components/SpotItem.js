import React from "react";
import './Popup.scss';
import BookingPopup from "./BookingPopup";

import { Button, Typography, Grid, ListItem, List, Box} from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import Rating from '@material-ui/lab/Rating';
import Paper from '@material-ui/core/Paper';
import Collapse from '@material-ui/core/Collapse';
import useDisplayAction from "../hooks/useDisplayAction"

export default function SpotItem(props) {

  const { checked, setChecked, handleCheckout } = useDisplayAction();

  function selectSpot(price) {
    handleCheckout()
    if(!isNaN(props.endTime - props.startTime)) {
    props.setTotalCost(`Total: $${(((props.endTime - props.startTime) / 60000) * (price / 60)).toFixed(2)}`)
    }
  }

    return(
    <div>
        
      <div class="flexline">
      <LocationOnIcon className="inlineIcon"/>
      <Typography variant="body1">{props.spot.street_address}</Typography>
      <MonetizationOnIcon />
      <Typography variant="body1">{Math.floor(props.spot.price)}</Typography>
      <Typography variant="body1"> / hour</Typography>
    </div>
    <div class="flexline">
      <Rating name="read-only" value={props.spot.rating} readOnly />
    
    </div>
      <img src={props.spot.picture} height="150px"/>
      
      <Typography>
       Owner: {props.spot.owner.first_name} {props.spot.owner.last_name}
      </Typography>
      <div class="flexline">
      <Button variant="contained" size="small">Contact Owner</Button>
      <Button variant="contained" size="small" color="secondary" onClick={() => {selectSpot(props.spot.price)}}>
        Book this Spot
      </Button>
      </div>
      <Collapse in={checked}>
          <Paper className="popup_checkout_map">
            <BookingPopup spot={props.spot} checked={checked} setChecked={setChecked} bookSpot={props.bookSpot} user={props.user} startTime={props.startTime} endTime={props.endTime} setStartTime={props.setStartTime} setEndTime={props.setEndTime} totalCost={props.totalCost} setTotalCost={props.setTotalCost}/>
          </Paper>
      </Collapse>


  </div>
  )


}