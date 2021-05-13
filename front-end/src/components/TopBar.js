import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Link, Switch, Route, useParams } from 'react-router-dom';

//import style & material-ui 
import './TopBar.scss';
import { Button, Typography, Avatar, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import { AppBar, Toolbar, Drawer, Grid, Divider} from '@material-ui/core';
import { Tabs, Tab } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';

//import components
import UserNameDisplay from './UserNameDisplay';
import OwnerMenuList from './OwnerMenuList';
import RenterMenuList from './RenterMenuList';

export default function TopBar(props) {

  const [openDrawer, setOpenDrawer] = useState(false);

  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  }
  
  const user = props.user

  return (
    <div>
      <AppBar position="fixed" className="topbar">
        <Toolbar>
          
          <div className="bar_left">
          <Link to="/" >
            <Typography variant="h1" className="logo">
              Park It
            </Typography>
            </Link>
          </div>
    
          <Button className="BT_dashboard" onClick={()=>{setOpenDrawer(true)}}>
            <AccountCircle className="icon_w_text"/> My Dashboard
          </Button>
          
        </Toolbar>
    </AppBar> 

    
    <Drawer variant="temporary" anchor="right" onClose={()=>{setOpenDrawer(false)}} open={openDrawer}>
      
      <UserNameDisplay user={user}/>

      <AppBar position="static">
      <Tabs value={selectedTab} onChange={handleChange} className="tab_dashboard">
        <Tab label="Renter" className="tab_item"/>
        <Tab label="Owner" className="tab_item"/>
      </Tabs>
      </AppBar> 

        {selectedTab === 0 && <RenterMenuList />}
        {selectedTab === 1 && <OwnerMenuList />}        

    </Drawer>


    </div>
  );
}




