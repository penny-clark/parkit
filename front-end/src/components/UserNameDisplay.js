import React from 'react';
import {Avatar, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';


export default function UserNameDisplay(props) {

  return (
    <ListItem className="userName_box">
      <ListItemAvatar>
        <Avatar alt="user_name" src={props.user.avatar} /> 
      </ListItemAvatar>
      
      <ListItemText>
      {props.user.first_name} {props.user.last_name}
      </ListItemText>
    </ListItem>
  );

}