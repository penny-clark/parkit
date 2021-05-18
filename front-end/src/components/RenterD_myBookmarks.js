import React, { useState} from 'react';
import SpotList from "./SpotList";
import './SpotListItem.scss';
import { getRenterBookmarks } from '../helpers/selector';
import { Divider, Typography } from '@material-ui/core';

export default function RenterD_myBookmarks(props) {
  const [expanded, setExpanded] = useState(null);
  //get this renter's bookmark list from helper function
  const thisUserBookmarks = getRenterBookmarks(props.user.id, props.bookmarks)
  
  return (
    <div className="wrap_dashboard">
      <h5 className="page_title">My Bookmark Spots</h5>
      <SpotList spots={thisUserBookmarks} user={props.user} bookSpot={props.bookSpot} expanded={expanded} setExpanded={setExpanded} />    
    </div>
  );
}




