import React from "react";
import './SpotListItem.scss';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Button, Typography } from '@material-ui/core';

export default function BookingPopup(props) {

  function save() {
    props.bookSpot(1, props.id, '2021-06-01 13:00:00', '2021-06-01 14:00:00')
  }

  return (
    <div>
     <Typography variant="h6">{props.spot.street_address}</Typography>
     <Button variant="contained" onClick={save}>Confirm & Pay</Button> 
    </div>

  )
}