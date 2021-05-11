import React, { Component, useState } from 'react';
<<<<<<< HEAD
import './TopBar.scss';
import { Button, Typography, Link } from '@material-ui/core';
import { AppBar, Toolbar, Drawer, Divider} from '@material-ui/core';
=======
import { BrowserRouter as Router, Switch, Route, useParams } from 'react-router-dom';

import './TopBar.scss';
import { Button, Typography, Link, Avatar, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import { AppBar, Toolbar, Drawer, Grid, Divider} from '@material-ui/core';
>>>>>>> topbar
import { Tabs, Tab } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import OwnerMenuList from './OwnerMenuList';
import RenterMenuList from './RenterMenuList';


import Owner_menuList from './Owner_menuList';
import Renter_menuList from './Renter_menuList';


export default function TopBar(props) {

  const [openDrawer, setOpenDrawer] = useState(false);

  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
<<<<<<< HEAD

=======
>>>>>>> topbar
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
<<<<<<< HEAD
      <Typography>

      </Typography>
            <AccountCircle />

          

        <Tabs value={selectedTab} onChange={handleChange} >
          <Tab label="Renter"/>
          <Tab label="Owner"/>
        </Tabs>

        {selectedTab === 0 && <Owner_menuList />}
        {selectedTab === 1 && <Renter_menuList />}

        

    </Drawer>
=======
      
      <ListItem>
        <ListItemAvatar>
          <Avatar alt="user_name" src="https://pr.sssagent.com/img/a1.png" /> 
        </ListItemAvatar>
        <ListItemText>
        User ID
        </ListItemText>
      </ListItem>

      <AppBar position="static">
      <Tabs value={selectedTab} onChange={handleChange} className="tab_dashboard">
        <Tab label="Renter" className="tab_item"/>
        <Tab label="Owner" className="tab_item"/>
      </Tabs>
      </AppBar>

        {selectedTab === 0 && <RenterMenuList />}
        {selectedTab === 1 && <OwnerMenuList />}        

    </Drawer>
    < Router>
      <Switch>
        <Route exact path="/mybookings">My Bookings : ID</Route>
        <Route exact path="/mybookmarks">My Bookmarks : ID</Route>
        <Route exact path="/mycars">My Cars : ID</Route>
        <Route exact path="/addnewcar">Add a Car : ID</Route>
      </Switch>
      </Router>

>>>>>>> topbar
    </div>
  );
}




