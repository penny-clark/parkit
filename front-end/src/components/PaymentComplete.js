import React from 'react';
import { Link } from 'react-router-dom';
import './BookingProcess.scss';
import { Button, Typography } from '@material-ui/core';

export default function PaymentComplete(props) {

  return(
    <div className="paymentdone_wrap">
     <img src="https://pr.sssagent.com/img/payment.gif" alt="payment completed"/>
     <Typography variant="h4">Your payment is completed!</Typography>
     <Typography variant="h6" className="page_title">Go to check your booking list!</Typography>
     <Link to="/mybookings" >
     <Button variant="contained" className="gotoBookingBT" size="large" color="secondary">My Booking list</Button>
     </Link>
    </div>
  )

}
