import React, { useState} from 'react';

import SpotList from "./SpotList";

//import hooks & helper
import { getRenterBookmarks } from '../helpers/selector';

export default function RenterD_myBookmarks(props) {

  return (
    <div className="wrap_dashboard">
      <SpotList spots={props.bookmarks} user={props.user} bookSpot={props.bookSpot}/>    
    </div>
  );
}




