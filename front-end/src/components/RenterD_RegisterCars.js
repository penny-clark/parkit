import React from 'react';

import './RegisterForm.scss';
import {Button, SliderValueLabel, Typography } from '@material-ui/core';
import { FilledInput } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import LocalOfferRoundedIcon from '@material-ui/icons/LocalOfferRounded';
import DriveEtaRoundedIcon from '@material-ui/icons/DriveEtaRounded';
import ColorLensRoundedIcon from '@material-ui/icons/ColorLensRounded';
import MoreRoundedIcon from '@material-ui/icons/MoreRounded';

export default function RenterD_RegisterCars(props) {

  function submitCar() {
   
  }

  return (
    <div className="wrap_registerCar">
      <Typography variant="h6" >Make</Typography>
       <FormControl fullWidth variant="filled" size="medium" >
        <FilledInput
          className="input_register"
          id="car_make"
          value={props.keyword}
          placeholder={"Enter your car's make"}
          onChange={(event) => props.setKeyword(event.target.value)}
          startAdornment={<InputAdornment position="start"><LocalOfferRoundedIcon /></InputAdornment>}
          labelWidth={7}
        />
    </FormControl>
    
    <Typography variant="h6" >Model</Typography>
    <FormControl fullWidth variant="filled">
        <FilledInput
          className="input_register"
          id="car_model"
          value={props.keyword}
          placeholder={"Enter your car's model"}
          onChange={(event) => props.setKeyword(event.target.value)}
          startAdornment={<InputAdornment position="start"><DriveEtaRoundedIcon /></InputAdornment>}
          labelWidth={7}
        />
    </FormControl>

    <Typography variant="h6" >Color</Typography>
    <FormControl fullWidth variant="filled">
        <FilledInput
          className="input_register"
          id="car_color"
          value={props.keyword}
          placeholder={"Enter your car's color"}
          onChange={(event) => props.setKeyword(event.target.value)}
          startAdornment={<InputAdornment position="start"><ColorLensRoundedIcon /></InputAdornment>}
          labelWidth={7}
        />
    </FormControl>

    <Typography variant="h6" >Plate Number</Typography>
    <FormControl fullWidth variant="filled" >
        <FilledInput
          className="input_register"
          id="car_plateNum"
          value={props.keyword}
          placeholder={"Enter your car's plate number"}
          onChange={(event) => props.setKeyword(event.target.value)}
          startAdornment={<InputAdornment position="start"><MoreRoundedIcon /></InputAdornment>}
          labelWidth={7}
        />
      </FormControl>

      <Button variant="contained" onClick={submitCar} color="secondary">Submit</Button> 
    </div>
  );
}


      