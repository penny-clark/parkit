import React, { useState} from 'react';

//import style & material-ui 
import './Dashboad.scss';
import { Button, Typography, ListItemText} from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionActions from '@material-ui/core/AccordionActions';
import LocalOfferRoundedIcon from '@material-ui/icons/LocalOfferRounded';
import DriveEtaRoundedIcon from '@material-ui/icons/DriveEtaRounded';
import ColorLensRoundedIcon from '@material-ui/icons/ColorLensRounded';
import MoreRoundedIcon from '@material-ui/icons/MoreRounded';
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
  function checkDefaultCar(carId) {
    if (carId === props.user.car_id) return true
    return false
  }

  function setDefaultCar(carid) {
    props.setDefaultCar(carid)
  }

  // iterate each car
  const displayCars = () => {
    const print = [];
 
    for (const carObj of thisUserCars) {
      const num = thisUserCars.indexOf(carObj)+1;
      const defaultCar = checkDefaultCar(carObj.id);
      print.push(
        <Accordion key={num} square={false} expanded={expanded === `panel${num}`} onChange={handleChange(`panel${num}`)} className="Accbox">
        <AccordionSummary aria-controls={`panel${num}d-content`} id={`panel${num}d-header`}>
          <Typography variant="h6">My Car {num} : {carObj.plate_number}</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <br></br>
          <ListItemText className="textBG">My car details</ListItemText>
          <div className="carinfo">
            <div className="flexline">
              <LocalOfferRoundedIcon /> Make: {carObj.make}
            </div>
            <div className="flexline">
            <DriveEtaRoundedIcon /> &nbsp; Model: {carObj.model}
            </div>
            <div className="flexline">
            <ColorLensRoundedIcon />&nbsp; Colour: {carObj.colour}
            </div>
            <div className="flexline">
              <MoreRoundedIcon />&nbsp; License plate: {carObj.plate_number}
            </div>
          </div>

        </AccordionDetails>
        <AccordionActions>
          {defaultCar === true &&
          <Button disabled >Default Car</Button>}
          {defaultCar === false && 
          <Button variant="contained" onClick={() => setDefaultCar(carObj.id)}> Set Default </Button>}
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
    <div className="wrap_dashboard">
       <h5 className="page_title">My Cars</h5>
      
       <div className="booklist_wrap">
      {displayCars()}
      </div>
    </div>
  );
}




