import React, { useState, useEffect } from "react";

export default function useDisplayAction() {
  
  //list expending control
  const [expanded, setExpanded] = useState(null);
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  //Drawer menu open control
  const [openDrawer, setOpenDrawer] = useState(false);
  const drawerClose = () => {
    setOpenDrawer(false)
  }

  //Tab control
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabs = (event, newValue) => {
    setSelectedTab(newValue);
  }

  return { 
    expanded, setExpanded, handleChange, 
    openDrawer, setOpenDrawer, drawerClose, 
    selectedTab, setSelectedTab, handleTabs 
  }
}