import React from "react";

export default function SpotListItem(props) {

  return (
    <main>
    <section>
      <h2>{props.street_address}</h2>
      <section>
        <p>{props.city}</p>
        <p>{props.province}</p>
        <p>{props.country}</p>
        <p>{props.postal_code}</p>
        <p>{props.rating}</p>
        <p>{props.price}</p>
        <p>{props.ownerfirstname}</p>
        <p> user id {props.user.id}</p>
      </section>
    </section>
    </main>
  )
}