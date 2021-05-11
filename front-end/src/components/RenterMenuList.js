import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom';

import './TopBar.scss';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';



export default function RenterMenuList(props) {
  return (
    <Router>
    <List>
        <Link to="/mybookings" >
        <ListItem>
          <ListItemIcon>
            <ListItemText>My Bookings</ListItemText>
          </ListItemIcon>
        </ListItem>
        </Link>
        <Link to="/mybookmarks" >
        <ListItem button>
          <ListItemIcon>
            <ListItemText>Bookmark Spots</ListItemText>
          </ListItemIcon>
        </ListItem>
        </Link>
        <Link to="/mycars" >
        <ListItem button>
          <ListItemIcon>
            <ListItemText>My Cars</ListItemText>
          </ListItemIcon>
        </ListItem>
        </Link>
        <Link to="/addnewcar" >
        <ListItem button>
          <ListItemIcon>
            <ListItemText>Add a Car</ListItemText>
          </ListItemIcon>
        </ListItem>
        </Link>
      </List>

      </Router>
    
  );
}


      