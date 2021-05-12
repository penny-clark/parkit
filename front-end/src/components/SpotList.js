import React from "react";
import SpotListItem from "./SpotListItem";


export default function SpotList(props) {
  const spotsmap = props.spots.map(spot => {
    return (
      <SpotListItem
        user ={props.user}
        key={spot.id}
        street_address={spot.street_address}
        city={spot.city}
        province={spot.province}
        country={spot.country}
        price={spot.price}
        ownerfirstname={spot.owner.first_name}
        ownerlastname={spot.owner.last_name}
      />
    );
  });
  return spotsmap;
}