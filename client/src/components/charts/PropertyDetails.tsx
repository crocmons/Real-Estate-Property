/* eslint-disable */
import { VillaOutlined } from '@mui/icons-material';
import { Box, Stack, Typography } from '@pankod/refine-mui';
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import GarageOutlinedIcon from '@mui/icons-material/GarageOutlined';
import OtherHousesOutlinedIcon from '@mui/icons-material/OtherHousesOutlined';
import SelectAllOutlinedIcon from '@mui/icons-material/SelectAllOutlined';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';




function createData(
  x: string,
  y: string,
  
) {
  return { x, y};
}
const rows = [
  createData('Tax', '$1,340 / 2022'),
  createData('Type',  'Single-Family'),
  createData('Building Age',  '5 Year'),
  createData('Size',  '1500 - 2000 feet2'),
  createData('Parking',  'Detached 2 Garage, 6 Parking'),
  createData('Basement',  'Unfinished'),
  createData('MLS#',  'E5579076'),
  createData('Possesion',  '5 Day'),
];

const PropertyDetails = () => (
  <Box
    p={2}
    id="chart"
    minWidth={{xs:'10%',sm:'50%'}}
    bgcolor="#FCFCFC"
    display="flex"
    borderRadius="15px"
    flexDirection="column"
    justifyContent='center'
    gap={3}
  >
    <Stack my="8px" direction="row" gap={3} p={3} >
    <Typography fontSize={16} fontWeight={600} color="#11142D">Property Details</Typography>
      <Typography display='flex' flexDirection='column' fontSize={14}>
      <VillaOutlined />   
       Appartment
      </Typography>
      <Typography display='flex' flexDirection='column' fontSize={14}>
      <BedOutlinedIcon />   
      Bedrooms
      </Typography>
      <Typography display='flex' flexDirection='column' fontSize={14}>
      <BathtubOutlinedIcon />   
       Bathrooms
      </Typography>
      <Typography display='flex' flexDirection='column' fontSize={14}>
      <GarageOutlinedIcon />   
       Garage
      </Typography>
      <Typography display='flex' flexDirection='column' fontSize={14}>
      <OtherHousesOutlinedIcon />   
       1,963 sq.ft.
      </Typography>
      <Typography display='flex' flexDirection='column' fontSize={14}>
      <SelectAllOutlinedIcon />   
       1,176 sq.ft.
      </Typography>
    </Stack>
    <Box
     p={2}
     id="chart"
     width="100%"
     bgcolor="#FCFCFC"
     display="flex"
     borderRadius="10px"
     flexDirection="row"
     justifyContent="space-between"
     gap={2}
     sx={{
      cursor: 'pointer'
     }}
    >
      <Stack my="5px" direction="column" p={2} >
        <Typography fontWeight={900} sx={{ borderBottom:'2px solid blue'}} fontSize='16'>
          Key Facts
        </Typography>
        <Stack my="10px" direction="column">
        <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo risus a mattis semper. Integer placerat volutpat odio, at pulvinar tortor laoreet mattis. Proin aliquet semper tempus.
        </Typography>
        </Stack>
        <Stack width='100%'>
        <TableContainer component={Paper} >
      <Table sx={{ width: '100%' }} aria-label="simple table">
        
        <TableBody sx={{
          width: '100%',
          
        }}>
          {rows.map((row) => (
            <TableRow
              key={row.x}
              sx={{ '&:last-child td, &:last-child th': { border: 0, width: '50%' } }}
            >
              <TableCell component="th" scope="row">
                {row.x}
              </TableCell>
              
              <TableCell align="right">{row.y}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Stack>
      </Stack>
      <Stack my="10px" direction="column" >
        <Typography fontWeight={800}>
          Details
        </Typography>
        </Stack>
      <Stack my="10px" direction="column" >
        <Typography fontWeight={800}>
          Rooms
        </Typography>
        </Stack>
    </Box>
      <Typography variant='h6' fontWeight={700}>
         Description
      </Typography>
    <Typography>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo risus a mattis semper. Integer placerat volutpat odio, at pulvinar tortor laoreet mattis. Proin aliquet semper tempus. Etiam auctor lacus leo <a href={`/properties/show/6420b0c5f18363d0d9ec8032`}><strong style={{color:'#475be8'}}>  Read more..</strong></a>
    </Typography>
  </Box>
);

export default PropertyDetails;
