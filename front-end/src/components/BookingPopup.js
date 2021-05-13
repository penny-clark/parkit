import React, { useState } from "react";
import './SpotListItem.scss';
import { Button, Typography, Grid, TextField } from '@material-ui/core';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import DateTimePicker from '@material-ui/lab/DateTimePicker';

export default function BookingPopup(props) {

  const [startTime, setStartTime] = useState("Select date and time");
  const [endTime, setEndTime] = useState("Select date and time");
  const [totalCost, setTotalCost] = useState("Please select you booking times")

  const handleCheckout = () => {
    props.setChecked((prev) => !prev);
  };

  function save() {
    props.bookSpot(props.user.car_id, props.spot.id, startTime, endTime)
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
            console.log(endTime, "is end time updated right away")
            setTotalCost(`Total: ${(newValue - startTime) * (props.spot.cost / 60)}`)
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