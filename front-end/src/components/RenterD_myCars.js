import React, { useState, useEffect } from 'react';
import axios from 'axios';

//import style & material-ui 
import './RenterDashboad.scss';
import { Button, Typography, Divider} from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionActions from '@material-ui/core/AccordionActions';
//import hooks & helper
import { getRenterCars } from '../helpers/selector';

export default function RenterD_myCars(props) {

  const thisUserCars = getRenterCars(props.user.id, props.cars);
  
  const [expanded, setExpanded] = useState('panel1');

  function remove(id) {
    props.deleteCar(id)
  }

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };


  // iterate each car
  const displayCars = () => {
    const print = [];
 
    for (const carObj of thisUserCars) {
      const num = thisUserCars.indexOf(carObj)+1;
   
      print.push(
        <Accordion square={false} expanded={expanded === `panel${num}`} onChange={handleChange(`panel${num}`)} className="Accbox">
        <AccordionSummary aria-controls={`panel${num}d-content`} id={`panel${num}d-header`}>
          <Typography variant="h6">My Car {num} : {carObj.plate_number}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="subtitle1">Make : {carObj.make}</Typography><br />
          <Typography variant="subtitle1">Model : {carObj.model}</Typography><br />
          <Typography variant="subtitle1">Colour : {carObj.colour}</Typography>
        </AccordionDetails>
        <AccordionActions>
          <Button color="secondary" onClick={() => remove(carObj.id)}>
            Delete this car
          </Button>
        </AccordionActions>
      </Accordion>
      )
    }
    return print;
  };


  return (
    <div>
      <Typography variant="body1">
      This is "Renter Dashboard - My cars" of user : {props.user.first_name} 
      </Typography>
   
      {displayCars()}
    
    </div>
  );
}




