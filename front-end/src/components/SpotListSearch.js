import React, {useState} from "react";
import SearchBar from "./SearchBar";
import SpotList from "./SpotList";
import MapView from "./MapView.jsx";
import { Tabs, Tab } from '@material-ui/core';
//hooks
import useDisplayAction from "../hooks/useDisplayAction"


export default function SpotListSearch(props) {
  const [keyword, setKeyword] = useState("")
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [totalCost, setTotalCost] = useState("Please select your booking times")
  const searchTerm = keyword.substring(0,2)
  const filterSpots = props.spots.filter(spot => spot.postal_code.toLowerCase().includes(searchTerm.toLowerCase()))
  
  const { selectedTab, setSelectedTab, handleTabs } = useDisplayAction();
 
  const [expanded, setExpanded] = useState(null);
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
    console.log(panel)
  };

  function openlayer(id) {
   // document.querySelector(`#spot3 .MuiPaper-root div.MuiButtonBase-root`).style.ariaExpaned = "true";
    handleChange(`panel${id}`)
    console.log(id, "are you working?")

    //handleChange(`panel${id}`) 
   //window.location = `http://localhost:3000/#spot${id}`
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

<MapView spots={filterSpots} user={props.user} bookSpot={props.bookSpot}  handleChange={handleChange}/>
<SpotList spots={filterSpots} user={props.user} bookSpot={props.bookSpot} startTime={startTime} endTime={endTime} setStartTime={setStartTime} setEndTime={setEndTime} totalCost={totalCost} setTotalCost={setTotalCost} />


{/*  
    <Tabs value={selectedTab} onChange={handleTabs} className="tab_homeview" centered>
      <Tab label="MapView" className="tab_item"/>
      <Tab label="ListView" className="tab_item"/>
    </Tabs>


    {selectedTab === 0 && <MapView spots={filterSpots} user={props.user} bookSpot={props.bookSpot} startTime={startTime} endTime={endTime} setStartTime={setStartTime} setEndTime={setEndTime} totalCost={totalCost} setTotalCost={setTotalCost} />}
    {selectedTab === 1 && <SpotList spots={filterSpots} user={props.user} bookSpot={props.bookSpot} startTime={startTime} endTime={endTime} setStartTime={setStartTime} setEndTime={setEndTime} totalCost={totalCost} setTotalCost={setTotalCost} />}     */}

    
    </div>
  )


}