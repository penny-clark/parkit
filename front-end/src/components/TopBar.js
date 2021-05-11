import React, { Component, useState } from 'react';
import './TopBar.scss';
import { Button, Typography, Link, Avatar, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import { AppBar, Toolbar, Drawer, Grid, Divider} from '@material-ui/core';
import { Tabs, Tab } from '@material-ui/core';
import { CssBaseline } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';

import Owner_menuList from './Owner_menuList';
import Renter_menuList from './Renter_menuList';


export default function TopBar(props) {

  const [openDrawer, setOpenDrawer] = useState(false);

  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  }

  return (
    <div>
      <AppBar position="fixed" className="topbar">
        <Toolbar>
          
          <div className="bar_left">
            <Link href="#" variant="h1" className="logo">
              Park It
            </Link>
          </div>
    
          <Button className="BT_dashboard" onClick={()=>{setOpenDrawer(true)}}>
            <AccountCircle className="icon_w_text"/> My Dashboard
          </Button>
          
        </Toolbar>
    </AppBar> 

    <Drawer variant="temporary" anchor="right" onClose={()=>{setOpenDrawer(false)}} open={openDrawer}>
      
      <ListItem>
        <ListItemAvatar>
          <Avatar alt="user_name" src="https://pr.sssagent.com/img/a1.png" /> 
        </ListItemAvatar>
        <ListItemText>
        User ID
        </ListItemText>
      </ListItem>

      <AppBar position="static">
      <Tabs value={selectedTab} onChange={handleChange} >
        <Tab label="Renter"/>
        <Tab label="Owner"/>
      </Tabs>
      </AppBar>

        {selectedTab === 0 && <Owner_menuList />}
        {selectedTab === 1 && <Renter_menuList />}

        

    </Drawer>
    </div>
  );
}




