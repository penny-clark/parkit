import React, { useState} from 'react';
import SpotList from "./SpotList";
import './SpotListItem.scss';
import { getRenterBookmarks } from '../helpers/selector';

export default function RenterD_myBookmarks(props) {
  const [expanded, setExpanded] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  //get this renter's bookmark list from helper function
  const thisUserBookmarks = getRenterBookmarks(props.user.id, props.bookmarks)

  function goToMap () {
    window.location = "http://localhost:3000/#"
  }
  
  return (
    <div className="wrap_dashboard">
      <h5 className="page_title">My Bookmarked Spots</h5>
      <SpotList spots={thisUserBookmarks} 
      user={props.user} 
      bookSpot={props.bookSpot} 
      expanded={expanded} 
      setExpanded={setExpanded}
      startTime={startTime}
      setStartTime={setStartTime}
      endTime={endTime}
      setEndTime={setEndTime} 
      closeLayer={goToMap}/>    
    </div>
  );
}




