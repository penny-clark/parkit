import React, {useState} from "react";
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";
import SpotList from "./SpotList";

export default function SpotListSearch(props) {
  const [keyword, setKeyword] = useState("")
console.log(props.spots, "Spots in spotlist search")
  const searchTerm = keyword.substring(0,2)
  const filterSpots = props.spots.filter(spot => spot.postal_code.toLowerCase().includes(searchTerm.toLowerCase()))

  console.log("THESE ARE MY FILTER SPOTS:", filterSpots)
console.log("keyword in Spot list search", keyword)
  return (
    <div>
    <SearchBar keyword={keyword} setKeyword={setKeyword}>
    </SearchBar>
    <SearchResult></SearchResult>
    <SpotList spots={filterSpots} user={props.user} bookSpot={props.bookSpot} keyword={keyword}
    />
    </div>
  )


}