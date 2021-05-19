import React, { useState, useEffect } from 'react';
import axios from 'axios';

//import style & material-ui 
import './Dashboad.scss';
import { Button, Typography, Divider} from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionActions from '@material-ui/core/AccordionActions';
//import hooks & helper
import useDisplayAction from "../hooks/useDisplayAction"
import { getOwnerSpots } from '../helpers/selector';

export default function OwnerD_mySpots(props) {

  const thisUserSpots = getOwnerSpots(props.user.id, props.spots);
  const [expanded, setExpanded] = useState('panel1');

  function remove(id) {
    props.deleteSpot(id)
  }

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };


  // iterate each spot
  const displaySpots = () => {
    const print = [];
 
    for (const spotObj of thisUserSpots) {
      const num = thisUserSpots.indexOf(spotObj)+1;
   
      print.push(
        <Accordion key={num} square={false} expanded={expanded === `panel${num}`} onChange={handleChange(`panel${num}`)} className="Accbox">
        <AccordionSummary aria-controls={`panel${num}d-content`} id={`panel${num}d-header`}>
          <Typography variant="h6">My Spot {num} : {spotObj.street_address}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="subtitle1">{spotObj.city}, {spotObj.province}, {spotObj.postal_code}, {spotObj.country}</Typography><br />
          <Typography variant="subtitle1">Price per hour : {spotObj.price}</Typography><br />
          <img src={spotObj.picture} />
        </AccordionDetails>
        <AccordionActions>
          <Button color="secondary" onClick={() => remove(spotObj.id)}>
            Delete this spot
          </Button>
        </AccordionActions>
      </Accordion>
      )
    }
    return print;
  };


  return (
    <div className="wrap_dashboard">
       <h5 className="page_title">My Spots</h5>
      
       <div className="booklist_wrap">
   
      {displaySpots()}
        </div>
    
    </div>
  );
}




