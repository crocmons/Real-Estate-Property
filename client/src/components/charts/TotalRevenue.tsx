/* eslint-disable */
import React, {useState} from "react";
import ReactApexChart from 'react-apexcharts';
import { Box, Stack, Typography } from '@pankod/refine-mui';
import { ArrowCircleUpRounded } from '@mui/icons-material';
import DnsOutlinedIcon from '@mui/icons-material/DnsOutlined';
import { TotalRevenueOptions, TotalRevenueSeries } from './chart.config';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Switch from '@mui/material/Switch';
import WifiIcon from '@mui/icons-material/Wifi';
import {
  PropertyDetails,
} from 'pages';
import { Refine, AuthProvider } from '@pankod/refine-core';
import {
  notificationProvider,
  RefineSnackbarProvider,
  ReadyPage,
  ErrorComponent,

} from '@pankod/refine-mui';
import RestoreOutlinedIcon from '@mui/icons-material/RestoreOutlined';
import dataProvider from '@pankod/refine-simple-rest';
import routerProvider from '@pankod/refine-react-router-v6';
import axios, { AxiosRequestConfig } from 'axios';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import { CredentialResponse } from 'interfaces/google';
import { parseJwt } from 'utils/parse-jwt';
import DonutLargeOutlinedIcon from '@mui/icons-material/DonutLargeOutlined';
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import WhereToVoteOutlinedIcon from '@mui/icons-material/WhereToVoteOutlined';

const TotalRevenue = () => {
  const [checked, setChecked] = useState(['notify']);

  const handleToggle = (value: string) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

 
 

return (
  <Box
    p={6}
    flex={1}
    bgcolor="#FCFCFC"
    id="chart"
    display="flex"
    flexDirection="column"
    borderRadius="15px"
    gap={1}
  >
    <Typography fontSize={16} fontWeight={600} color="#11142D" gap={3} flexDirection='row'>
      Shortcuts
      <DnsOutlinedIcon 
       sx={{
        fontSize: '16px',
        justifyContent: 'center',  
        flexDirection:'row',
        pl:'2px'
        }} />
    </Typography>
    <ListItem >
        <Typography
         sx={{
          fontSize:'16px',
          fontWeight:'bold'
        }}
        >
          Notification
        </Typography>
        <Switch
          edge="end"
          onChange={handleToggle('notify')}
          checked={checked.indexOf('notify') !== -1}
          inputProps={{
            'aria-labelledby': 'switch-list-label-wifi',
          }}
        />
      </ListItem>
    <ListItem 
      sx={{
        backgroundColor:'#2E63F6',
        borderRadius:'8px',
        padding: '10px',
        cursor:'pointer'
      }}
    >
      <ListItemIcon sx={{color:'#fcfcfc',}}>
      <VpnKeyOutlinedIcon />
      </ListItemIcon>
        <Typography
        sx={{
          fontSize:'16px',
          color:'#fcfcfc',
          lineHeight: '24px'
        }}
        >
          Key Facts
        </Typography>
      </ListItem>
    <ListItem>
       
    <ListItemIcon>
      <RestoreOutlinedIcon />
      </ListItemIcon>

        <Typography
         sx={{
          fontSize:'14px',
          lineHeight: '24px'
        }}
        >
        <a href={`/properties/show/6420b0c5f18363d0d9ec8032`}>Property History</a>
        </Typography>
      </ListItem>
    <ListItem>
    <ListItemIcon>
      <DonutLargeOutlinedIcon />
      </ListItemIcon>
        <Typography
         sx={{
          fontSize:'16px',
          lineHeight: '24px'
        }}
        >
          Demographics
        </Typography>
      </ListItem>
    <ListItem>
    <ListItemIcon>
      <WhereToVoteOutlinedIcon />
      </ListItemIcon>
        <Typography
         sx={{
          fontSize:'13px',
          lineHeight: '24px',
          fontWeight:'900px'
        }}
        >
          Points of interest
        </Typography>
      </ListItem>

 
    
  </Box>
)
 };

export default TotalRevenue;
