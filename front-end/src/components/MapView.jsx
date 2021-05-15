import React, {useState} from "react";
import { Button, Typography, Grid, ListItem, List, Box} from '@material-ui/core';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

export default function MapView(props) {

  return(
    <div>
    <Typography variant="6" >This is map view</Typography>
    <div id="map" className="mapBox">
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
       
      </MapContainer>
    </div>
    </div>
  )

}