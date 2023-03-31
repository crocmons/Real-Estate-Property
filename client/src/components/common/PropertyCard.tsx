/* eslint-disable */
import { Place } from '@mui/icons-material';
import { Link } from '@pankod/refine-react-router-v6';
import { Typography, Box, Card, CardMedia, CardContent, Stack } from '@pankod/refine-mui';

import { PropertyCardProps } from 'interfaces/property';

const PropertyCard = ({ id, photo }: PropertyCardProps) => (
  <Card
    component={Link}
    to={`/properties/show/${id}`}
    // sx={{
    //   maxWidth: '329px',
    //   padding: '10px',
    //   '&:hover': {
    //     boxShadow: '0px 22px 45px 2px rgba(176, 176, 176, 0.1);',
    //   },
    //   cursor: 'pointer',
    // }}
    elevation={0}
  >
    <CardMedia
      component="img"
      width={242}
      height={242}
      image={photo}
      alt="card_img"
      sx={{ borderRadius: '8px', left: '1418px',
      top: '100px', width:{xs:'210',sm:'242'},
      height:{xs:'210',sm:'242'}


       }}
    />
    
  </Card>
);

export default PropertyCard;
