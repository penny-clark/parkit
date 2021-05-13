import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom';
import './TopBar.scss';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';



export default function OwnerMenuList(props) {
  return (
    <List>
      <Link to="/myspotbooking" >
        <ListItem button>
          <ListItemIcon>
            <ListItemText>Booked Schedule</ListItemText>
          </ListItemIcon>
        </ListItem>
      </Link>
        <Link to="/myspots" >
        <ListItem button>
          <ListItemIcon>
            <ListItemText>My Spots</ListItemText>
          </ListItemIcon>
        </ListItem>
        </Link>
      <Link to="/addnewspot" >
        <ListItem button>
          <ListItemIcon>
            <ListItemText>Add New Spot</ListItemText>
          </ListItemIcon>
        </ListItem>
        </Link>
      </List>
  );
}


      