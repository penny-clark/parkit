import React from 'react';
import './TopBar.scss';
import { Button, Typography, Link } from '@material-ui/core';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';



export default function Renter_menuList(props) {
  return (
    <List>
        <ListItem button>
          <ListItemIcon>
            <ListItemText>My Bookings</ListItemText>
          </ListItemIcon>
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <ListItemText>My Cars</ListItemText>
          </ListItemIcon>
        </ListItem>
      </List>
  );
}


      