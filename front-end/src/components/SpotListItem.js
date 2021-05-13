import React from "react";


import './SpotListItem.scss';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Button, Typography } from '@material-ui/core';

export default function SpotListItem(props) {

  function showDetail () {
    console.log("clicked!")
  }

  function save() {
    props.bookSpot(1, props.id, '2021-06-01 13:00:00', '2021-06-01 14:00:00')
  }

  return (
    <div>
    <div className="spotlist_box" onClick={showDetail}>
    <Typography variant="body1">{props.street_address}</Typography> 
    <Typography variant="body1">{props.price}</Typography> 
    <Typography variant="body1">{props.rating}</Typography> 
        
    
    {/* <div className = "spotlist_detailview"> */}
    <Typography variant="body1">{props.city}</Typography> 
    <Typography variant="body1">{props.province}</Typography> 
    <Typography variant="body1">{props.country}</Typography> 
    <Typography variant="body1">{props.postal_code}</Typography> 
    <Typography variant="body1">{props.price}</Typography> 
    <Typography variant="body1">{props.owner.first_name}</Typography>
    <Typography variant="body1">{props.owner.last_name}</Typography>
    <Typography variant="body1">{props.owner.email}</Typography>

    <Typography variant="body1">{props.rating}</Typography> 

    <Button onClick={save}>Confirm & Pay</Button> 
    
    </div>

    </div>
  )
}