import React from "react";

export default function SpotListItem(props) {

  return (
    <main>
    <section>
      <h2>{props.street_address}</h2>
      <section>
        <p >{props.city}</p>
        <p>{props.province}</p>
        <p>{props.country}</p>
        <p>{props.postal_code}</p>
      </section>
    <section>
   <p>{props.rating}</p>
   </section>
    </section>
    </main>
  )
}