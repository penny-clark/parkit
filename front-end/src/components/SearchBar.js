import React from 'react';

import './SearchBar.scss';
import { Grid, TextField } from '@material-ui/core';
import AddLocationRoundedIcon from '@material-ui/icons/AddLocationRounded';
import { FilledInput } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import DateTimePicker from '@material-ui/lab/DateTimePicker';

export default function SearchBar(props) {

  return (
    <div id="searchbox">
      <div className="size_control_w600">
      <FormControl variant="filled" fullWidth={true} >
      <InputLabel htmlFor="outlined-adornment-amount">Search by Postal code</InputLabel>
        <FilledInput
          id="outlined-adornment-amount"
          value={props.keyword}
          placeholder={"Enter your destination's postal code"}
          onChange={(event) => props.setKeyword(event.target.value)}
          startAdornment={<InputAdornment position="start"><AddLocationRoundedIcon /></InputAdornment>}
          
        />
      </FormControl>
        
      <Grid container spacing={1} justify="center" className="timepicker">
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Grid item justify="center">
          <DateTimePicker
            renderInput={(props) => <TextField {...props} />}
            label="Start Time"
            value={props.startTime}
            onChange={(newValue) => {
              props.setStartTime(newValue);
              props.setEndTime(newValue);
            }}
            minDateTime={new Date()}
          />
        </Grid>
        <Grid item justify="center">
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
      </div>
    </div>
  );
}




