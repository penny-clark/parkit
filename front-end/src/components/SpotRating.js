import React, { useState, useEffect } from 'react';

import './Popup.scss';
import Rating from '@material-ui/lab/Rating';

export default function SpotRating(props) {
  const [value, setValue] = useState(0);

  return(
    <Rating
      key={props.id}
      name={`rating${props.id}`}
      value={value}
      onChange={(event, newValue) => {
      setValue(newValue);
    }}/>
  )
}
