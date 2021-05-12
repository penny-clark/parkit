import React, { Component, useState } from 'react';
import './TopBar.scss';
import { Tabs, Tab, AppBar } from '@material-ui/core';

export default function SearchResult(props) {
 

  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  }

  return (
 
    <AppBar position="static">
    <Tabs value={selectedTab} onChange={handleChange} className="tab_dashboard">
      <Tab label="MapView" className="tab_item"/>
      <Tab label="ListView" className="tab_item"/>
    </Tabs>
    </AppBar>

  );
}
