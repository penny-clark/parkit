import React, { Component } from 'react';
import './App.scss';
import Button from '@material-ui/core/Button';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';

export default function TopBar(props) {
  return (

    //<div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h1" className="test_h">
            Park It
          </Typography>
          <Button>
            <AccountCircle />
            My Dashboard
          </Button>
          
        </Toolbar>
    </AppBar> 
   // </div>

  );
}




