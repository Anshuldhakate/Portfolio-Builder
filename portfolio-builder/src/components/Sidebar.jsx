// src/components/Sidebar.js
import React from 'react';
import { List, ListItem, ListItemText, ButtonBase } from '@mui/material';
import {Box } from '@chakra-ui/react';

const Sidebar = () => (
  <Box as="nav" p={4} w="200px" borderRight="1px" borderColor="gray.200">
    <Box mb={4} textAlign="center">
      {/* <img src="logo.png" alt="Logo Here" style={{ width: '80%' }} /> */}
    </Box>
    <List>
      {['Home', 'Schedule', 'Recommendation', 'Analytics', 'Profile', 'Inbox', 'Themes'].map((text) => (
        <ListItem key={text} disablePadding>
          <ButtonBase style={{ width: '100%', backgroundColor:"lightblue", margin:"2vh"} }>
            <ListItemText primary={text} />
          </ButtonBase>
        </ListItem>
      ))}
    </List>
  </Box>
);

export default Sidebar;
