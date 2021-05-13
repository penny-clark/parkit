import React from "react";
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";
import SpotList from "./SpotList";

export default function SpotListSearch(props) {
  const [keyword, setKeyword] = useState("")

  return (
    <div>
    <SearchBar keyword={keyword} setKeyword={setKeyword}>
    </SearchBar>
    <SearchResult></SearchResult>
    <SpotList spots={state.spots} user={state.user} bookSpot={bookSpot} keyword={keyword}
    />
    </div>
  )


}