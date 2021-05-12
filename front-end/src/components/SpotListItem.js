import React from "react";


import './SpotListItem.scss';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Button, Typography } from '@material-ui/core';

export default function SpotListItem(props) {

  return (
    <div className="spotlist_box">
    <Typography variant="body1">{props.street_address}</Typography> 
    <Typography variant="body1">{props.price}</Typography> 
    <Typography variant="body1">{props.rating}</Typography> 
        
    </div>
  )
}