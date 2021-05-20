import React from 'react';
import { Link } from 'react-router-dom';
import './TopBar.scss';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import FolderRoundedIcon from '@material-ui/icons/FolderRounded';
import EditLocationRoundedIcon from '@material-ui/icons/EditLocationRounded';
import AddLocationRoundedIcon from '@material-ui/icons/AddLocationRounded';

export default function OwnerMenuList(props) {
  return (
    <List>
      <Link to="/mybookedschedule" >
        <ListItem button onClick={props.setDrawer}> 
          <ListItemIcon>
            <FolderRoundedIcon className="icon_with_h6"/>
            <ListItemText>Booked Schedule</ListItemText>
          </ListItemIcon>
         </ListItem>
      </Link>
        <Link to="/myspots" >
          <ListItem button onClick={props.setDrawer}>
          <ListItemIcon>
            <EditLocationRoundedIcon className="icon_with_h6"/>
            <ListItemText>My Spots</ListItemText>
          </ListItemIcon>
         </ListItem>
        </Link>
      <Link to="/addnewspot" >
        <ListItem button onClick={props.setDrawer}>
          <ListItemIcon>
            <AddLocationRoundedIcon className="icon_with_h6"/>
            <ListItemText>Add New Spot</ListItemText>
          </ListItemIcon>
         </ListItem>
        </Link>
      </List>
  );
}


      