import React from "react";
import SpotListItem from "components/SpotListItem";


export default function SpotList(props) {
  const spotsmap = props.spots.map(day => {
    return (
      <SpotListItem
        key={spot.id}
        street_address={spot.street_address}
        city={props.city}
        province={props.province}
        country={props.county}
        price={spot.price}
      />
    );
  });
  return spotsmap;
}