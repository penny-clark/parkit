import React, { Component, useState } from 'react';

import './SearchBar.scss';
import { Button, Typography} from '@material-ui/core';
import { OutlinedInput } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import { Grid, TextField } from '@material-ui/core';
import AddLocationRoundedIcon from '@material-ui/icons/AddLocationRounded';
import AlarmRoundedIcon from '@material-ui/icons/AlarmRounded';
import AlarmOnRoundedIcon from '@material-ui/icons/AlarmOnRounded';

export default function SearchBar(props) {

  return (
    <div class="searchbox">
      <FormControl fullWidth variant="outlined">
       <InputLabel htmlFor="outlined-adornment-amount">Postal code</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            //value={values.amount}
            //onChange={handleChange('amount')}
            startAdornment={<InputAdornment position="start"><AddLocationRoundedIcon /></InputAdornment>}
            labelWidth={7}
          />
        </FormControl>
        
      
      

     


    </div>
  );
}




