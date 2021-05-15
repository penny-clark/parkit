import React, { useState, useEffect } from 'react';

import './Popup.scss';
import Rating from '@material-ui/lab/Rating';
import { Button, Typography } from '@material-ui/core';

export default function SpotRating(props) {
  const [value, setValue] = useState(0);

  function placeReadOnly() {
    props.handleCheckout()
  }

  return(
    <div>
      <Typography>My Rating</Typography>
    <Rating
      key={props.id}
      name={`rating${props.id}`}
      value={value}
      onChange={(event, newValue) => {
      setValue(newValue);
    }}
     />
     <Button onClick={placeReadOnly}> Submit </Button>
     </div>
               
  )
}
