import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import './TopBar.scss';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import FolderRoundedIcon from '@material-ui/icons/FolderRounded';
import FolderSpecialRoundedIcon from '@material-ui/icons/FolderSpecialRounded';
import DriveEtaRoundedIcon from '@material-ui/icons/DriveEtaRounded';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';

export default function RenterMenuList(props) {

  return (
    
    <List>
  
        <Link to="/mybookings" >
        <ListItem button onClick={props.setDrawer}>
          <ListItemIcon>
            <FolderRoundedIcon className="icon_with_h6"/>
            <ListItemText>My Bookings</ListItemText>
          </ListItemIcon>
        </ListItem>
        </Link>
        <Link to="/mybookmarks" >
        <ListItem button onClick={props.setDrawer}>
          <ListItemIcon>
            <FolderSpecialRoundedIcon  className="icon_with_h6"/>
            <ListItemText>Bookmarked Spots</ListItemText>
          </ListItemIcon>
        </ListItem>
        </Link>
        <Link to="/mycars" >
        <ListItem button onClick={props.setDrawer}>
          <ListItemIcon>
            <DriveEtaRoundedIcon className="icon_with_h6"/>
            <ListItemText>My Cars</ListItemText>
          </ListItemIcon>
        </ListItem>
        </Link>
        <Link to="/addnewcar" >
        <ListItem button onClick={props.setDrawer}>
          <ListItemIcon>
           <AddCircleRoundedIcon className="icon_with_h6"/>
            <ListItemText>Add a Car</ListItemText>
          </ListItemIcon>
        </ListItem>
        </Link>
       
      </List>

  
    
  );
}


      