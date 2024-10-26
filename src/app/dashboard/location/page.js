"use client"
import React from 'react';
import { Box, Card, CardContent, CardHeader, Grid, Typography } from '@mui/material';

const DesignerLocation = ({ location, image }) => {
  return (
    <Card className="bg-white rounded-lg shadow-md">
      <CardHeader
        avatar={
          <Box
            component="img"
            src={image}
            alt={location}
            className="w-20 h-20 rounded-full"
          />
        }
        title={<Typography className="font-bold">{location}</Typography>}
      />
      <CardContent>
        <Box
          component="img"
          src="https://images.stockcake.com/public/6/5/c/65c2e66c-d382-4800-b766-f8cb2afa75c5_large/urban-shoe-store-stockcake.jpg"
          alt={`${location} map`}
          className="w-full h-40 object-cover rounded-b-lg"
        />
      </CardContent>
    </Card>
  );
};

const DesignerLocations = () => {
  const locations = [
    {
      location: 'Basak ',
      image: 'https://images.stockcake.com/public/f/2/a/f2a315c0-490b-4678-8518-5980ced6db25_large/man-in-shadows-stockcake.jpg',
    },
    {
      location: 'Kalawisan',
      image: 'https://images.stockcake.com/public/d/b/3/db32f80a-5462-4c40-857d-ac92dfb92d4f_large/vibrant-face-art-stockcake.jpg',
    },
    {
      location: 'Mercado',
      image: 'https://images.stockcake.com/public/7/4/3/74314b74-299e-4a49-9103-499bec62b2dd_large/intense-gaze-portrait-stockcake.jpg',
    },
    {
      location: 'Canjulao',
      image: 'https://images.stockcake.com/public/9/8/a/98a788a0-d41e-4b64-81c3-f3712d0a1e61_large/intense-gaze-portrait-stockcake.jpg',
    },
    {
      location: 'Pusok',
      image: 'https://images.stockcake.com/public/4/4/2/4425245c-d29f-436f-98fa-880058371ecc_large/confident-business-gaze-stockcake.jpg',
    },
    {
      location: 'Kinalumsan',
      image: 'https://images.stockcake.com/public/0/4/c/04ca343b-bb04-469c-ad05-be57ec98246a_large/stoic-business-profile-stockcake.jpg',
    },
  ];

  return (
    <Box className="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-10">
      <Typography variant="h4" align="center" gutterBottom className="text-black">
        Our Designer Locations
      </Typography>
      <Grid container spacing={4} className="max-w-[1200px] w-full">
        {locations.map((location, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <DesignerLocation location={location.location} image={location.image} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default DesignerLocations;