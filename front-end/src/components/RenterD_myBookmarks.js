import React, { useState} from 'react';
import SpotList from "./SpotList";
import { getRenterBookmarks } from '../helpers/selector';
import { Typography } from '@material-ui/core';

export default function RenterD_myBookmarks(props) {
  const [expanded, setExpanded] = useState(null);
  //get this renter's bookmark list from helper function
  const thisUserBookmarks = getRenterBookmarks(props.user.id, props.bookmarks)
  
  return (
    <div className="wrap_dashboard">
      <Typography variant="h5" className="page_title">Renter Dashboard - My bookmark list</Typography>
      <SpotList spots={thisUserBookmarks} user={props.user} bookSpot={props.bookSpot} expanded={expanded} setExpanded={setExpanded} />    
    </div>
  );
}




