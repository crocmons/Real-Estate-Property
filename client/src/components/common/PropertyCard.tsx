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
      width={260}
      height={260}
      image={photo}
      alt="card_img"
      sx={{ borderRadius: '8px', left: '1418px',
      top: '104px', width:{xs:'220',sm:'260'},
      height:{xs:'220',sm:'260'}

       }}
    />
    {/* <CardContent sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: '10px', paddingX: '5px' }}>
      <Stack direction="column" gap={1}>
        <Typography fontSize={16} fontWeight={500} color="#11142D">{title}</Typography>
        <Typography fontSize={12}>
          {description}
        </Typography>
        <Stack direction="row" gap={0.5} alignItems="flex-start">
          <Place sx={{
            fontSize: 18,
            color: '#11142D',
            marginTop: 0.5,
          }}
          />
          <Typography fontSize={14} color="#808191">{location}</Typography>
        </Stack>
      </Stack>
      <Box px={1.5} py={0.5} borderRadius={1} bgcolor="#DADEFA" height="fit-content">
        <Typography fontSize={12} fontWeight={600} color="#475BE8">${price}</Typography>
      </Box>
    </CardContent> */}
  </Card>
);

export default PropertyCard;
