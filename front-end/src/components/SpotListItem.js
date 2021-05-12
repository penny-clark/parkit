import React from "react";


import './SpotListItem.scss';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Button, Typography } from '@material-ui/core';

export default function SpotListItem(props) {

  const showDetail = function () {
    console.log("clicked!")
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
    {/* </div> */}
    </div>

    </div>
  )
}