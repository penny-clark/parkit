import React, {useState} from "react";
import { Button, Typography, Box} from '@material-ui/core';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './Popup.scss';
import SpotItem from './SpotItem';
import BookingPopup from "./BookingPopup";
import Paper from '@material-ui/core/Paper';

export default function MapView(props) {

  return(
    <div id="map" className="mapBox">
      <MapContainer center={[49.28214439794972, -123.10596956451279]} zoom={14} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

      {props.spots.map(spot => (
      <Marker key={spot.id} position={[spot.latitude, spot.longitude]}>
          <Popup position={[spot.latitude, spot.longitude]}>
           <div className="map_popup_wrap">
            <SpotItem spot={spot} 
            user={props.user} 
            bookSpot={props.bookSpot} 
            startTime={props.startTime} 
            endTime={props.endTime} 
            setStartTime={props.setStartTime} 
            setEndTime={props.setEndTime} 
            totalCost={props.totalCost} 
            setTotalCost={props.setTotalCost}/>
           </div>
          </Popup>
        </Marker>
      ))}
       
      </MapContainer>
    </div>

 
  )

}