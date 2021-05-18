import React, { useState } from "react";
import { Link } from 'react-router-dom';

import './SpotListItem.scss';
import { Button, Typography, Grid, TextField } from '@material-ui/core';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import DateTimePicker from '@material-ui/lab/DateTimePicker';

export default function BookingPopup(props) {

  const [affirmed, setAffirmed] = useState(false)
  const [totalCost, setTotalCost] = useState("Please select your booking times")

  const handleCheckout = () => {
    props.setChecked((prev) => !prev);
  };

  const redirectToPayment = () => {
    window.location = "http://localhost:3000/payment_complete"
  }

  function save() {
    props.bookSpot(props.user.car_id, props.spot.id, props.startTime, props.endTime, props.spot.street_address, props.spot.city, props.spot.province, props.spot.pcode, props.spot.price, props.spot.picture, props.spot.owner.user_id, props.spot.owner.first_name, props.spot.owner.last_name, props.spot.owner.owner_email, props.spot.owner.avatar, props.spot.rating)
    handleCheckout();
    redirectToPayment();

  }

  function setTotal () {
    if(!isNaN(props.endTime - props.startTime) && (props.endTime - props.startTime) !== 0) {
      setTotalCost(`Total + HST: $${(((Math.round(props.endTime - props.startTime) / 60000) / 15 * (props.spot.price.toFixed(2) / 4)) * 1.13).toFixed(2)}`)
      }
  }

  function verifyDetails() {
    setAffirmed(true)
    setTotal()
  }


  return (
    <div>
     <Typography variant="h6">{props.spot.street_address}</Typography>
     {affirmed === false &&
     <div>
     <Grid container spacing={1} justify="center" className="popup_time">
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Grid item spacing={2} justify="center">
          <DateTimePicker
            renderInput={(props) => <TextField {...props} />}
            label="Start Time"
            value={props.startTime}
            onChange={(newValue) => {
              props.setStartTime(newValue);
            }}
            minDateTime={new Date()}
          />
        </Grid>
        <Grid item spacing={2} justify="center">
          <DateTimePicker
            renderInput={(props) => <TextField {...props} />}
            label="End Time"
            value={props.endTime}
            onChange={(newValue) => {
            props.setEndTime(newValue);
          }}
          minDateTime={props.startTime}
        />
        </Grid>
      </LocalizationProvider>
      </Grid>
      <Button variant="contained" onClick={() => verifyDetails()} color="secondary">Confirm Booking Details</Button> 
      <Button variant="contained" onClick={handleCheckout} >Close</Button>
      </div>
      }
      {affirmed === true &&
      <div>
      <p>{totalCost}</p>
     <Button variant="contained" onClick={save}>Reserve & Pay</Button> 
     <Button variant="contained" onClick={() => setAffirmed(false)} color="secondary">Edit booking</Button> 
     </div>
      }

    </div>

  )
}