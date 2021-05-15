import React, { useState } from "react";
import { Link } from 'react-router-dom';

import './SpotListItem.scss';
import { Button, Typography, Grid, TextField } from '@material-ui/core';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import DateTimePicker from '@material-ui/lab/DateTimePicker';

export default function BookingPopup(props) {

  const [startTime, setStartTime] = useState("Select date and time");
  const [endTime, setEndTime] = useState("Select date and time");
  const [totalCost, setTotalCost] = useState("Please select your booking times")

  const handleCheckout = () => {
    props.setChecked((prev) => !prev);
  };

  const redirectToPayment = () => {
    window.location = "http://localhost:3000/payment_complete"
  }

  function save() {
    props.bookSpot(props.user.car_id, props.spot.id, startTime, endTime, props.spot.street_address, props.spot.city, props.spot.province, props.spot.pcode, props.spot.price, props.spot.picture, props.spot.owner.user_id, props.spot.owner.first_name, props.spot.owner.last_name, props.spot.owner.owner_email, props.spot.owner.avatar, props.spot.rating)
    handleCheckout();
    redirectToPayment();

  }


  return (
    <div>
     <Typography variant="h6">{props.spot.street_address}</Typography>
     <Grid container spacing={1} justify="center" className="popup_time">
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Grid item spacing={2} justify="center">
          <DateTimePicker
            renderInput={(props) => <TextField {...props} />}
            label="Start Time"
            value={startTime}
            onChange={(newValue) => {
              setStartTime(newValue);
            }}
          />
        </Grid>
        <Grid item spacing={2} justify="center">
          <DateTimePicker
            renderInput={(props) => <TextField {...props} />}
            label="End Time"
            value={endTime}
            onChange={(newValue) => {
            setEndTime(newValue);
            setTotalCost(`Total: $${(((endTime - startTime) / 60000) * (props.spot.price / 60)).toFixed(2)}`)
          }}
        />
        </Grid>
      </LocalizationProvider>
      </Grid>
      <p>{totalCost} </p>
     <Button variant="contained" onClick={save} color="secondary">Confirm & Pay</Button> 
     <Button variant="contained" onClick={handleCheckout} >Close</Button>
    </div>

  )
}