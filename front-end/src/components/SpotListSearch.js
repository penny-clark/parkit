import React, {useState} from "react";
import SearchBar from "./SearchBar";
import SpotList from "./SpotList";
import MapView from "./MapView.jsx";
import { Tabs, Tab, AppBar } from '@material-ui/core';
//hooks
import useDisplayAction from "../hooks/useDisplayAction"

export default function SpotListSearch(props) {
  const [keyword, setKeyword] = useState("")
  console.log(props.spots, "Spots in spotlist search")
  const searchTerm = keyword.substring(0,2)
  const filterSpots = props.spots.filter(spot => spot.postal_code.toLowerCase().includes(searchTerm.toLowerCase()))

  console.log("THESE ARE MY FILTER SPOTS:", filterSpots)
  console.log("keyword in Spot list search", keyword)
  
  const { selectedTab, setSelectedTab, handleTabs } = useDisplayAction();

  return (
    <div className="home_wrap">
    <SearchBar keyword={keyword} setKeyword={setKeyword} />

 
    <Tabs value={selectedTab} onChange={handleTabs} className="tab_homeview" centered>
      <Tab label="MapView" className="tab_item"/>
      <Tab label="ListView" className="tab_item"/>
    </Tabs>


    {selectedTab === 0 && <MapView />}
    {selectedTab === 1 && <SpotList spots={filterSpots} user={props.user} bookSpot={props.bookSpot} keyword={keyword}/>}   

    
    </div>
  )


}