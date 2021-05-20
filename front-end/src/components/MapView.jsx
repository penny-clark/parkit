import React, { Fragment } from "react";
import { Button, Typography } from '@material-ui/core';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './Popup.scss';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import Rating from '@material-ui/lab/Rating';

export default function MapView(props) {

  return(
    <Fragment>
    <div id="map" className="mapBox">
      <MapContainer center={[49.27888266483564, -123.11584020044214]} zoom={14} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

      {props.spots.map(spot => (
        
      <Marker key={spot.id} position={[spot.latitude, spot.longitude]}>
          <Popup position={[spot.latitude, spot.longitude]} >

            <div className="map_popup_wrap" id={`spot${spot.id}`}>
     
              <div className="flexline">
                <LocationOnIcon className="inlineIcon"/>
                <Typography variant="body1">{spot.street_address}</Typography>
              </div>
              <div className="flexline">
                <MonetizationOnIcon />
                <Typography variant="body1">{Math.floor(spot.price)}</Typography>
                <Typography variant="body1" className="text_ss"> &nbsp; / hr</Typography>
              </div>
              
              <div className="flexline">
                <Rating name="read-only" value={Number(spot.rating)} readOnly size="small" className="space_right"/>
                <Button variant="contained" className="BT_right" size="small" onClick={()=> props.openLayer(spot.id, spot.postal_code)} >Detail </Button>
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