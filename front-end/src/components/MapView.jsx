import React, {Fragment, useState} from "react";
import ReactDOM from 'react-dom';
import { Button, Typography, Box} from '@material-ui/core';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import useDisplayAction from "../hooks/useDisplayAction"
import './Popup.scss';
import SpotItem from './SpotItem';
import BookingPopup from "./BookingPopup";
import Paper from '@material-ui/core/Paper';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import Rating from '@material-ui/lab/Rating';
import Collapse from '@material-ui/core/Collapse';
import  { openEmail } from '../helpers/helper'

export default function MapView(props) {

  function render_layer(spot, props) {

    window.location = `http://localhost:3000/#spot${spot.id}`;

    ReactDOM.render(
      <div className="map_popup_wrap" id={`spot${spot.id}`}>
      <div className="flexline">
        <LocationOnIcon className="inlineIcon"/>
        <Typography variant="body1">{spot.street_address}</Typography>
        <MonetizationOnIcon />
        <Typography variant="body1">{Math.floor(spot.price)}</Typography>
        <Typography variant="body1"> / hour</Typography>
      </div>
    <div className="flexline">
      <Rating name="read-only" value={spot.rating} readOnly />
    </div>
    <img src={spot.picture} height="150px"/>
    
    <Typography>
    Owner: {spot.owner.first_name} {spot.owner.last_name}
    </Typography>
    <div className="flexline">
      <Button variant="contained" size="small" onClick={()=> openEmail(spot.owner.email)}>Contact Owner</Button>
    </div>
  </div>

    , document.getElementById('map_spot_layer'))

  }

  return(
    <Fragment>
    <div id="map" className="mapBox">
      <MapContainer center={[49.28214439794972, -123.10596956451279]} zoom={14} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

      {props.spots.map(spot => (
        
      <Marker key={spot.id} position={[spot.latitude, spot.longitude]}>
          <Popup position={[spot.latitude, spot.longitude]} >
          {/* <Typography variant="body1">{spot.street_address}</Typography>
            <Button variant="contained" size="small" onClick={()=>{render_layer(spot,props)}}>Detail</Button>  */}
           
      <div className="map_popup_wrap" id={`spot${spot.id}`}>
      <Button variant="contained" size="small" onClick={()=> props.handleChange(`panel${spot.id}`)} >Detail </Button>
        <div className="flexline">
          <LocationOnIcon className="inlineIcon"/>
          <Typography variant="body1">{spot.street_address}</Typography>
          <MonetizationOnIcon />
          <Typography variant="body1">{Math.floor(spot.price)}</Typography>
          <Typography variant="body1"> / hour</Typography>
        </div>
        <div className="flexline">
          <Rating name="read-only" value={spot.rating} readOnly />
        </div>
        <img src={spot.picture} height="150px"/>
        
        <Typography>
        Owner: {spot.owner.first_name} {spot.owner.last_name}
        </Typography>
        <div className="flexline">
          <Button variant="contained" size="small" onClick={()=> openEmail(spot.owner.email)}>Contact Owner</Button>
          
        </div>
      </div>
          </Popup>
        </Marker>
       
      ))}

      </MapContainer>
      
    </div>


    <div id="map_spot_layer">

    </div>
    </Fragment>
  )

}