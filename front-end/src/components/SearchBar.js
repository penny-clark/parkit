import React, { Component, useState } from 'react';

import './SearchBar.scss';
import { Button, Typography} from '@material-ui/core';
import { Grid, TextField } from '@material-ui/core';
import AddLocationRoundedIcon from '@material-ui/icons/AddLocationRounded';
import AlarmRoundedIcon from '@material-ui/icons/AlarmRounded';
import AlarmOnRoundedIcon from '@material-ui/icons/AlarmOnRounded';

import { FilledInput } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';

import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import DateTimePicker from '@material-ui/lab/DateTimePicker';

export default function SearchBar(props) {

  const [value, setValue] = useState(new Date());

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
        
      <Grid container spacing={1} justify="center" className="timepicker">
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Grid item spacing={2} justify="center">
      <DateTimePicker

        renderInput={(props) => <TextField {...props} />}
        label="DateTimePicker"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
      />
      </Grid>
      <Grid item spacing={2} justify="center">
        <DateTimePicker
        renderInput={(props) => <TextField {...props} />}
        label="DateTimePicker"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
      />
      </Grid>
    </LocalizationProvider>
    </Grid>
    </div>
  );
}




