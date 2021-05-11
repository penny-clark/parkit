import React, { Component, useState } from 'react';

import './SearchBar.scss';
import { FilledInput } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import { Grid, TextField } from '@material-ui/core';
import AddLocationRoundedIcon from '@material-ui/icons/AddLocationRounded';
import AlarmRoundedIcon from '@material-ui/icons/AlarmRounded';
import AlarmOnRoundedIcon from '@material-ui/icons/AlarmOnRounded';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

export default function SearchBar(props) {

  return (
    <div class="searchbox">
      <FormControl fullWidth variant="filled">
       <InputLabel htmlFor="outlined-adornment-amount">Postal code</InputLabel>
          <FilledInput
            id="outlined-adornment-amount"
            //value={values.amount}
            //onChange={handleChange('amount')}
            startAdornment={<InputAdornment position="start"><AddLocationRoundedIcon /></InputAdornment>}
            labelWidth={7}
          />
        </FormControl>
        
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Date picker dialog"
          format="MM/dd/yyyy"
          //value={selectedDate}
         // onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        <KeyboardTimePicker
          margin="normal"
          id="time-picker"
          label="Time picker"
         // value={selectedDate}
         // onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />
        <KeyboardTimePicker
          margin="normal"
          id="time-picker"
          label="Time picker"
         // value={selectedDate}
         // onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />
         <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Date picker dialog"
          format="MM/dd/yyyy"
          //value={selectedDate}
         // onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
      
     


    </div>
  );
}




