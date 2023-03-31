/* eslint-disable */
import { useList } from '@pankod/refine-core';
import { Typography, Box, Stack} from '@pankod/refine-mui';
import {
  PropertyDetails,
  TotalRevenue,
  PropertyCard,
  // TopAgent,
  List
} from 'components';

const Home = () => {
  const { data, isLoading, isError } = useList({
    resource: 'properties',
    config: {
      pagination: {
        pageSize: 3,
      },
    },
  });

  const latestProperties = data?.data ?? [];

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Something went wrong!</div>;
  }

  
 
  

  return (
    <Box>
      {/* <Typography fontSize={25} fontWeight={700} color="#11142D">Dashboard</Typography> */}

      {/* <Box display="flex" flexWrap="wrap" gap={2}>
      <img 
      src={image1}
      alt="img"
      width="478px"
      height="320px"
      />
      <img 
      src={image1}
      alt="img"
      height= "320px"
      width = "568px"
      border-radius= "8px"

      />
      <img 
      src={image1}
      alt="img"
      width="478px"
      height="320px"
      />
      <img 
      src={image1}
      alt="img"
      width="478px"
      height="320px"
      />
        
      </Box>

       <Stack mt="25px" width="100%" direction={{ xs: 'column', lg: 'row' }} gap={4}>
        <TotalRevenue />
        <PropertyReferrals />
  </Stack>  */ }

      <Stack mt="25px" width="100%" flexWrap="wrap" direction="row" gap={2}>
        {/* <TopAgent /> */}

        <Box
          flex={1}
          borderRadius="15px"
          padding="20px"
          bgcolor="#FCFCFC"
          display="flex"
          flexDirection="column"
          minWidth={{ xs: '10%', sm: '100%' }}
        >
          <Typography fontSize={18} fontWeight={600} color="#11142D">Latest Properties</Typography>
          <Box mt={2.5} sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }} >
            {latestProperties.map((property) => (

              <PropertyCard
                key={property._id}
                id={property._id}
                photo={property.photo}
                description={""}
                title={""}
                location={""}
                price={""}

              
              />
              ))}
          </Box>
        </Box>
      </Stack>
      <Stack mt="25px" width="100%" direction={{ xs: 'column', lg: 'row' }} gap={3}>
        <List />
        <PropertyDetails />
        <TotalRevenue />
  </Stack>  
    </Box>
  );
};

export default Home;
