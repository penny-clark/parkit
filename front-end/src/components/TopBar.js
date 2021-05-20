import React from 'react';
import { Link } from 'react-router-dom';
//import style & material-ui 
import './TopBar.scss';
import { Button, Typography } from '@material-ui/core';
import { AppBar, Toolbar, Drawer } from '@material-ui/core';
import { Tabs, Tab } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
//import components
import UserNameDisplay from './UserNameDisplay';
import MenuList_owner from './MenuList_owner';
import MenuList_renter from './MenuList_renter';
//hooks
import useDisplayAction from "../hooks/useDisplayAction"

export default function TopBar(props) {

  const { openDrawer, setOpenDrawer, drawerClose } = useDisplayAction();
  const { selectedTab, handleTabs } = useDisplayAction();
  

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
      
      <UserNameDisplay user={props.user}/>

      <AppBar position="static">
      <Tabs value={selectedTab} onChange={handleTabs} className="tab_dashboard">
        <Tab label="Renter" className="tab_item"/>
        <Tab label="Owner" className="tab_item"/>
      </Tabs>
      </AppBar> 

        {selectedTab === 0 && <MenuList_renter setDrawer={drawerClose}/>}
        {selectedTab === 1 && <MenuList_owner  setDrawer={drawerClose}/>}        

    </Drawer>


    </div>
  );
}




