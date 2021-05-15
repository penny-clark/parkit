import React, {useState} from "react";
import { Button, Typography, Grid, ListItem, List, Box} from '@material-ui/core';

export default function MapView(props) {

  return(
    <div>
    <Typography variant="6" >This is map view</Typography>
    <div id="map" className="mapBox"></div>

    </div>
  )

}