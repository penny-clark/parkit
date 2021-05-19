import React, {useState, useRef} from "react";
import SearchBar from "./SearchBar";
import SpotList from "./SpotList";
import MapView from "./MapView.jsx";
import { Tabs, Tab, Button } from '@material-ui/core';
import { checkSpotAvailable, checkBookingAvailable } from '../helpers/selector';


export default function SpotListSearch(props) {
  // data controllers 
  const [keyword, setKeyword] = useState("");
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const searchTerm = keyword.substring(0,4)
  const localSpots = props.spots.filter(spot => spot.postal_code.toLowerCase().includes(searchTerm.toLowerCase()))
  const filterSpots = checkSpotAvailable(localSpots, props.bookings, startTime, endTime)
  
  // page view controllers
  const [searching, setSearching] = useState(false);
  const [expanded, setExpanded] = useState(null);
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabs = (event, newValue) => {
    setSelectedTab(newValue);
  }

  const itemEls = useRef({})

  function openLayer(id, postalcode) {
    setSelectedTab(1)
    setExpanded(`panel${id}`)
    window.location = `http://localhost:3000#spot${id}`
    searchHandle(false)
    setKeyword(postalcode)

   }

   function closeLayer() {
     setSelectedTab(0)
     setExpanded(null)
     window.location = `http://localhost:3000#`
     searchHandle(true)
     setKeyword("")
     
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

   function startSearch(s) {
     searchHandle(s)
     setSearching(true)
   }

   function endSearch(s) {
     searchHandle(s)
     setSearching(false)
     window.location = `http://localhost:3000#`
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
    {searching === false &&
      <button className="BT_st1" onClick={() => startSearch(false)}>Search</button>
    }
    {searching === true &&
      <button className="BT_st1"onClick={() => endSearch(true)}>New Search</button>
    }
    </div>

    <Tabs value={selectedTab} onChange={handleTabs} className="tab_homeview" centered>
      <Tab label="MapView" className="tab_item"/>
      <Tab label="ListView" className="tab_item"/>
    </Tabs>


    {selectedTab === 0 &&  <MapView 
      spots={filterSpots} 
      user={props.user} 
      openLayer={openLayer} 
      />}

    {selectedTab === 1 && <SpotList 
      spots={filterSpots} 
      user={props.user} 
      expanded={expanded} 
      setExpanded={setExpanded} 
      itemEls={itemEls} 
      bookSpot={props.bookSpot} 
      startTime={startTime} 
      endTime={endTime} 
      setStartTime={setStartTime} 
      setEndTime={setEndTime} 
      closeLayer={closeLayer}
      />}     


    </div>
  )


}