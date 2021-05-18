import React, {useState, useRef} from "react";
import SearchBar from "./SearchBar";
import SpotList from "./SpotList";
import MapView from "./MapView.jsx";
import { Tabs, Tab, Button } from '@material-ui/core';
//hooks
import useDisplayAction from "../hooks/useDisplayAction"
import { BrowserRouter as Router, HashRouter, Switch } from 'react-router-dom';

export default function SpotListSearch(props) {
  const [keyword, setKeyword] = useState("")
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [totalCost, setTotalCost] = useState("Please select your booking times")
  const searchTerm = keyword.substring(0,2)
  const filterSpots = props.spots.filter(spot => spot.postal_code.toLowerCase().includes(searchTerm.toLowerCase()))
  
  // const { selectedTab, setSelectedTab, handleTabs } = useDisplayAction();

  const [expanded, setExpanded] = useState(null);
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabs = (event, newValue) => {
    setSelectedTab(newValue);
  }

  const itemEls = useRef({})

  function openlayer(id) {
    setSelectedTab(1)
    setExpanded(`panel${id}`)
    window.location = `http://localhost:3000#spot${id}`
    searchHandle(false)
   // document.getElementsByClassName('.spotlist_wrap').style.visibility = 'hidden'
    //document.querySelector(`.searchbox`).style.display = "none";
    //document.getElementById(`spot${id}`).style.display = "absolute";

   }

   function searchHandle(s) {
     const searchDom = document.getElementById('searchbox')
    if (s === true ) {
      searchDom.style.display = "block";

    } 
    if (s === false ) {
      searchDom.style.display = "none";

    } 
   }

  return (
    <div className="home_wrap">
    <SearchBar 
    keyword={keyword} 
    setKeyword={setKeyword}
    startTime={startTime}
    endTime={endTime}
    setStartTime={setStartTime}
    setEndTime={setEndTime} 
    />
    <div className="flexline">
      <button className="BT_st1" onClick={()=>{searchHandle(true)}}>Open Search Bar</button>
      <button className="BT_st1"onClick={()=>{searchHandle(false)}}>Close Search Bar</button>
    </div>
  

{/* <SpotList spots={filterSpots} user={props.user} bookSpot={props.bookSpot}  startTime={startTime} endTime={endTime} setStartTime={setStartTime} setEndTime={setEndTime} totalCost={totalCost} setTotalCost={setTotalCost} /> */}



    <Tabs value={selectedTab} onChange={handleTabs} className="tab_homeview" centered>
      <Tab label="MapView" className="tab_item"/>
      <Tab label="ListView" className="tab_item"/>
    </Tabs>


    {selectedTab === 0 &&  <MapView spots={filterSpots} user={props.user} openlayer={openlayer}/>}
    {selectedTab === 1 && <SpotList spots={filterSpots} user={props.user} expanded={expanded} setExpanded={setExpanded} itemEls={itemEls} bookSpot={props.bookSpot} startTime={startTime} endTime={endTime} setStartTime={setStartTime} setEndTime={setEndTime} totalCost={totalCost} setTotalCost={setTotalCost} />}     


    </div>
  )


}