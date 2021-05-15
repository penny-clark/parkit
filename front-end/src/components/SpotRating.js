import React, { useState, useEffect } from 'react';

import './Popup.scss';
import Rating from '@material-ui/lab/Rating';
import { Button } from '@material-ui/core';

export default function SpotRating(props) {
  const [value, setValue] = useState(0);
  console.log(props.bookObj.spot.spot_id, "spot id")
  console.log(props.id, "is this stable?")
  return(
    <div>
    <Rating
      key={props.id}
      name={`rating${props.id}`}
      value={value}
      onChange={(event, newValue) => {
      setValue(newValue);
    }}
     />
     <Button onClick={() => props.rateSpot(props.user.id, props.bookObj.spot.spot_id, value)}> Submit </Button>
     </div>
  )
}
