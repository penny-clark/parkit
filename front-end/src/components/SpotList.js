import React from "react";
import SpotListItem from "./SpotListItem";


export default function SpotList(props) {
  console.log(props, "props in  spot list")
  const spotsmap = props.spots.map(spot => {
    return (
      <SpotListItem
        key={spot.id}
        street_address={spot.street_address}
        city={spot.city}
        province={spot.province}
        country={spot.country}
        price={spot.price}
      />
    );
  });
  return spotsmap;
}