/* eslint-disable */
import * as React from 'react';
import { Box, color, Typography } from '@pankod/refine-mui';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import StickyNote2OutlinedIcon from '@mui/icons-material/StickyNote2Outlined';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Switch from '@mui/material/Switch';
import RestoreOutlinedIcon from '@mui/icons-material/RestoreOutlined';
import DonutLargeOutlinedIcon from '@mui/icons-material/DonutLargeOutlined';
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import DirectionsOutlinedIcon from '@mui/icons-material/DirectionsOutlined';
import FlagCircleOutlinedIcon from '@mui/icons-material/FlagCircleOutlined';
import NightlightRoundOutlinedIcon from '@mui/icons-material/NightlightRoundOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const List = () => {
 
 
 

return (
  <Box
    p={4}
    flex={1}
    bgcolor="#FCFCFC"
    id="chart"
    display="flex"
    flexDirection="column"
    borderRadius="15px"
    gap={2}
  >
    <Stack spacing={4} direction="row">
      <Button variant="text" sx={{color:'green',bgcolor:'#DFFFD8', paddingX:'15px'}}>Sale</Button>
      <Button variant="contained" href="/properties" sx={{color:'#fcfcfc',bgcolor:'#475be8'}}>Add</Button>
    </Stack>
   
  
   <Stack direction='column'>

    <Typography fontSize='18px' lineHeight='24px' fontWeight={800} >
    MLS#: E5579076
    </Typography>
    <Typography fontSize='14px'>
    Listed for: <strong style={{color:'blue'}}>$1,549,586</strong>
    </Typography>
    <Typography fontSize='14px' gap={1} paddingY='5px' fontWeight={600}>
    2118 Thornridge Cir. Syracuse, Connecticut 35624
    </Typography>
   </Stack>

   <Stack direction='column' spacing={2}>
   <Button variant="outlined" sx={{color:'#808191'}} fullWidth>
    <ListItemIcon>
     <MapOutlinedIcon />
    </ListItemIcon>
    <a href={`/properties/show/6420b0c5f18363d0d9ec8032`}>View on Map</a>
    </Button>
   <Button variant="outlined" sx={{color:'#808191'}} fullWidth>
    <ListItemIcon>
    <DirectionsOutlinedIcon />
    </ListItemIcon>
    <a href='https://www.google.com/maps/' style={{color:'black'}}>Get Directions</a>
    </Button>
   <Button variant="outlined" sx={{color:'#808191', p:'10px'}} fullWidth>
    <ListItemIcon>
    <ShareOutlinedIcon  />
    </ListItemIcon>
    Share
   </Button>
   <Button variant="outlined" sx={{color:'#808191'}} fullWidth>
    <ListItemIcon>
      <StickyNote2OutlinedIcon />
    </ListItemIcon>
    My Notes
    </Button>
   </Stack>
   
   
 <Stack spacing={2} mt={3} direction='column'>
  <Box width='254px' height='94px'>
    <Typography fontSize='12px'>
    Listing Agent
    </Typography>
    <Typography fontSize='15px' fontWeight={700}>
    Courtney Henry
    </Typography>
    <Typography fontSize='14px' fontWeight={500}>
      <NightlightRoundOutlinedIcon  sx={{fontSize:'16px',color:'#fcfcfc', bgcolor:'red', borderRadius:'10px', fontWeight:'900px',mt:'5px', padding:'1px'}}/>

      +90 552 489 8277
      <ListItemIcon sx={{
        display:'flex',
        justifyContent:'flex-end',
        mt:'-23px',
        
}}>
      <EmailOutlinedIcon sx={{fontSize:'22px'}}/>
      </ListItemIcon>
    </Typography>
  </Box>
 </Stack>
    
  </Box>
)
 };

export default List;
