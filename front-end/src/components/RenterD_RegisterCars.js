import React, {useState, Fragment} from 'react';
import { Link } from 'react-router-dom';
import './RegisterForm.scss';
import {Button, Typography } from '@material-ui/core';
import { FilledInput } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import LocalOfferRoundedIcon from '@material-ui/icons/LocalOfferRounded';
import DriveEtaRoundedIcon from '@material-ui/icons/DriveEtaRounded';
import ColorLensRoundedIcon from '@material-ui/icons/ColorLensRounded';
import MoreRoundedIcon from '@material-ui/icons/MoreRounded';

export default function RenterD_RegisterCars(props) {

  function submitCar() {
   props.addCar(props.user.id, make, model, colour, plateNumber)
  }
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [colour, setColour] = useState("");
  const [plateNumber, setPlateNumber] = useState("");


  return (
    <Fragment>
      <Typography variant="h5" className="page_title">Register New Car</Typography>
    
    <div className="wrap_registerCar">
      <Typography variant="h6" >Make</Typography>
       <FormControl fullWidth variant="filled" size="medium" >
        <FilledInput
          className="input_register"
          id="car_make"
          value={make}
          placeholder={"Enter your car's make"}
          onChange={(event) => setMake(event.target.value)}
          startAdornment={<InputAdornment position="start"><LocalOfferRoundedIcon /></InputAdornment>}
        
        />
    </FormControl>
    
    <Typography variant="h6" >Model</Typography>
    <FormControl fullWidth variant="filled">
        <FilledInput
          className="input_register"
          id="car_model"
          value={model}
          placeholder={"Enter your car's model"}
          onChange={(event) => setModel(event.target.value)}
          startAdornment={<InputAdornment position="start"><DriveEtaRoundedIcon /></InputAdornment>}
   
        />
    </FormControl>

    <Typography variant="h6" >Colour</Typography>
    <FormControl fullWidth variant="filled">
        <FilledInput
          className="input_register"
          id="car_colour"
          value={colour}
          placeholder={"Enter your car's colour"}
          onChange={(event) => setColour(event.target.value)}
          startAdornment={<InputAdornment position="start"><ColorLensRoundedIcon /></InputAdornment>}
     
        />
    </FormControl>

    <Typography variant="h6" >Plate Number</Typography>
    <FormControl fullWidth variant="filled" >
        <FilledInput
          className="input_register"
          id="car_plateNum"
          value={plateNumber}
          placeholder={"Enter your car's plate number"}
          onChange={(event) => setPlateNumber(event.target.value)}
          startAdornment={<InputAdornment position="start"><MoreRoundedIcon /></InputAdornment>}
      
        />
      </FormControl>
      <Link to="/mycars" >
      <Button variant="contained" onClick={submitCar} color="secondary">Submit</Button> 
      </Link>
    </div>
    </Fragment>
  );
}


      