import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import './RegisterForm.scss';
import {Button, Typography, Grid } from '@material-ui/core';
import { FilledInput } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import ImageRoundedIcon from '@material-ui/icons/ImageRounded';

export default function OwnerD_RegisterSpots(props) {

  function submitSpot() {
    props.addSpot(props.user.id, streetAddress, city, province, country, postalCode, latitude, longitude, picture, price) 
  }

  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [country, setCountry] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [picture, setPicture] = useState("");
  const [price, setPrice] = useState("");

  return (
    <Fragment>
      <Typography variant="h5" className="page_title">Register New Spot</Typography>
    
       <div className="wrap_registerCar">

      <Typography variant="h6" className="form_title">Spot Address</Typography>

      <Grid container>
        <Grid item xs={6}>
          <FormControl fullWidth variant="filled" size="medium" >
          <InputLabel htmlFor="street_address">Street Address</InputLabel>
            <FilledInput
              className="input_register_left"
              id="street_address"
              value={streetAddress}
              placeholder={"example: 123 Robson St"}
              onChange={(event) => setStreetAddress(event.target.value)}
       
            />
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth variant="filled" size="medium" >
          <InputLabel htmlFor="city">City</InputLabel>
            <FilledInput
              className="input_register"
              id="city"
              value={city}
              onChange={(event) => setCity(event.target.value)}
        
            />
          </FormControl>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={6}>
          <FormControl fullWidth variant="filled" size="medium" >
          <InputLabel htmlFor="Province">Province</InputLabel>
            <FilledInput
              className="input_register_left"
              id="Province"
              value={province}
              onChange={(event) => setProvince(event.target.value)}
       
            />
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth variant="filled" size="medium" >
          <InputLabel htmlFor="postal_code">Postal Code</InputLabel>
            <FilledInput
              className="input_register"
              id="potal_code"
              value={postalCode}
              onChange={(event) => setPostalCode(event.target.value)}
        
            />
          </FormControl>
        </Grid>
      </Grid>

  
        <Grid item xs={6}>
          <FormControl fullWidth variant="filled" size="medium" >
          <InputLabel htmlFor="Country">Country</InputLabel>
            <FilledInput
              className="input_register_left"
              id="Country"
              value={country}
              onChange={(event) => setCountry(event.target.value)}
           
            />
          </FormControl>
        </Grid>

    <Typography variant="h6" className="form_title">Latitude & Longitude</Typography>
    <p>This helps us show your listing on our map! <a href="https://support.google.com/maps/answer/18539?co=GENIE.Platform%3DDesktop&hl=en>Instruc">Tips for finding the latitutude and longitude of an address</a></p>
      <Grid container>
          <Grid item xs={6}>
            <FormControl fullWidth variant="filled" size="medium" >
            <InputLabel htmlFor="latitude">Latitude</InputLabel>
              <FilledInput
                className="input_register_left"
                id="latitude"
                value={latitude}
                placeholder={"Enter latitude"}
                onChange={(event) => setLatitude(event.target.value)}
           
              />
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth variant="filled" size="medium" >
            <InputLabel htmlFor="longitude">Longitude</InputLabel>
              <FilledInput
                className="input_register"
                id="longitude"
                value={longitude}
                onChange={(event) => setLongitude(event.target.value)}
           
              />
            </FormControl>
          </Grid>
        </Grid>

    <Typography variant="h6" className="form_title">Price per hour</Typography>
    <FormControl fullWidth variant="filled" >
        <FilledInput
          className="input_register"
          id="spot_price"
          value={price}
          placeholder={"Enter your spot's price per hour"}
          onChange={(event) => setPrice(event.target.value)}
          startAdornment={<InputAdornment position="start"><MonetizationOnIcon /></InputAdornment>}
      
        />
      </FormControl>

      <Typography variant="h6" className="form_title">Upload Spot Pictue</Typography>
    <FormControl fullWidth variant="filled" >
        <FilledInput
          className="input_register"
          id="spot_picture"
          value={picture}
          placeholder={"Enter your spot image url"}
          onChange={(event) => setPicture(event.target.value)}
          startAdornment={<InputAdornment position="start"><ImageRoundedIcon /></InputAdornment>}
     
        />
      </FormControl>
      <Link to="/myspots" >
      <Button variant="contained" onClick={submitSpot} color="secondary">Submit</Button> 
      </Link>
    </div>
    </Fragment>
  );
}


      