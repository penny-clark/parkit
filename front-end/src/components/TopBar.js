import React, { Component, useState } from 'react';
import './TopBar.scss';
import { Button, Typography, Link } from '@material-ui/core';
import { AppBar, Toolbar, Drawer, Divider} from '@material-ui/core';
import { Tabs, Tab } from '@material-ui/core';
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
    </div>
  );
}




