import React, { Fragment } from 'react';

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
   
  }

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
              value={props.keyword}
              placeholder={"example: 123 Robson St"}
              onChange={(event) => props.setKeyword(event.target.value)}
              labelWidth={7}
            />
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth variant="filled" size="medium" >
          <InputLabel htmlFor="city">City</InputLabel>
            <FilledInput
              className="input_register"
              id="city"
              value={props.keyword}
              onChange={(event) => props.setKeyword(event.target.value)}
              labelWidth={7}
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
              value={props.keyword}
              onChange={(event) => props.setKeyword(event.target.value)}
              labelWidth={7}
            />
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth variant="filled" size="medium" >
          <InputLabel htmlFor="postal_code">Postal Code</InputLabel>
            <FilledInput
              className="input_register"
              id="city"
              value={props.keyword}
              onChange={(event) => props.setKeyword(event.target.value)}
              labelWidth={7}
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
              value={props.keyword}
              onChange={(event) => props.setKeyword(event.target.value)}
              labelWidth={7}
            />
          </FormControl>
        </Grid>

    <Typography variant="h6" className="form_title">Price per hour</Typography>
    <FormControl fullWidth variant="filled" >
        <FilledInput
          className="input_register"
          id="spot_price"
          value={props.keyword}
          placeholder={"Enter your spot's price per hour"}
          onChange={(event) => props.setKeyword(event.target.value)}
          startAdornment={<InputAdornment position="start"><MonetizationOnIcon /></InputAdornment>}
          labelWidth={7}
        />
      </FormControl>

      <Typography variant="h6" className="form_title">Upload Spot Pictue</Typography>
    <FormControl fullWidth variant="filled" >
        <FilledInput
          className="input_register"
          id="spot_picture"
          value={props.keyword}
          placeholder={"Enter your spot image url"}
          onChange={(event) => props.setKeyword(event.target.value)}
          startAdornment={<InputAdornment position="start"><ImageRoundedIcon /></InputAdornment>}
          labelWidth={7}
        />
      </FormControl>

      <Button variant="contained" onClick={submitSpot} color="secondary">Submit</Button> 
    </div>
    </Fragment>
  );
}


      