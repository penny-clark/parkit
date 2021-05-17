import React, {useState, useEffect} from "react";
import ReactDOM from 'react-dom';
import { Button, Typography, Box} from '@material-ui/core';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './Popup.scss';
import SpotItem from './SpotItem';
import BookingPopup from "./BookingPopup";
import Paper from '@material-ui/core/Paper';

export default function MapView(props) {


  function render_layer(spot,props) {

    ReactDOM.render(
      <div className="map_popup_wrap">
      <SpotItem spot={spot} 
        user={props.user} 
        bookSpot={props.bookSpot} 
        startTime={props.startTime} 
        endTime={props.endTime} 
        setStartTime={props.setStartTime} 
        setEndTime={props.setEndTime} 
        totalCost={props.totalCost} 
        setTotalCost={props.setTotalCost}
        />
      </div>, document.getElementById('map_spot_layer')
    );
    
  }

  return(

    <div id="map" className="mapBox">
      <MapContainer center={[49.28214439794972, -123.10596956451279]} zoom={14} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

      {props.spots.map(spot => (
      <Marker key={spot.id} position={[spot.latitude, spot.longitude]}>
          <Popup position={[spot.latitude, spot.longitude]} >
            <div class="flexline">
              <h3 className="map_popup_title"> {spot.street_address}</h3>
              <h3 className="map_popup_title"> &nbsp;&nbsp;${spot.price} / hr</h3>
            </div>
            <Button variant="contained" size="small" onClick={()=>{render_layer(spot,props)}}>Detail</Button> 
          </Popup>
        </Marker>
      ))}

      </MapContainer>
      <div id="map_spot_layer">

        </div>
    </div>



 
  )

}