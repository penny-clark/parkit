import React, {useState} from "react";
import { Button, Typography, Grid, ListItem, List, Box} from '@material-ui/core';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

export default function MapView(props) {

  return(
    <div>
    <Typography variant="6" >This is map view</Typography>
    <div id="map" className="mapBox">
      <MapContainer center={[49.28214439794972, -123.10596956451279]} zoom={14} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

      {props.spots.map(spot => (
      <Marker key={spot.id} position={[spot.latitude, spot.longitude]}>
          <Popup position={[spot.latitude, spot.longitude]}>
           <div>
             <p>{spot.street_address}</p>
             <p>Price: {spot.price}</p>
             <button>Book now</button>
           </div>
          </Popup>
        </Marker>
      ))}
       
      </MapContainer>
    </div>
    </div>
  )

}