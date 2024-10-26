"use client"
import React from 'react';
import { Box, Card, CardContent, CardHeader, Grid, Typography } from '@mui/material';

const TeamMember = ({ image, name, role, details, socials }) => {
  return (
    <Card className="bg-white rounded-lg shadow-md">
      <CardHeader
        avatar={
          <Box
            component="img"
            src={image}
            alt={name}
            className="w-20 h-20 rounded-full"
          />
        }
        title={<Typography className="font-bold">{name}</Typography>}
        subheader={<Typography className="text-gray-500">{role}</Typography>}
      />
      <CardContent>
        <Typography className="mb-4">{details}</Typography>
        <Grid container spacing={1} justifyContent="center">
          {socials.map((social, index) => (
            <Grid item key={index}>
              <a href={social.link} target="_blank" rel="noopener noreferrer">
                {social.icon}
              </a>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

const MeetOurTeam = () => {
  const teamMembers = [
    {
      image: 'https://images.stockcake.com/public/8/7/5/875ad5c1-9c97-4860-9dff-1364d972c031_large/futuristic-digital-face-stockcake.jpg',
      name: 'Alex Smith',
      role: 'Designer',
      details: 'Responsible for creating visually appealing designs for our clients.',
      socials: [
        { link: '#', icon: <i className="fab fa-facebook-f"></i> },
        { link: '#', icon: <i className="fab fa-twitter"></i> },
        { link: '#', icon: <i className="fab fa-instagram"></i> },
      ],
    },
    {
      image: 'https://images.stockcake.com/public/e/a/c/eac12d12-8062-4711-b1c0-8fe7a083959b_large/artistic-face-paint-stockcake.jpg',
      name: 'May Brown',
      role: 'Designer',
      details: 'Specializes in user interface design and ensuring a seamless user experience.',
      socials: [
        { link: '#', icon: <i className="fab fa-facebook-f"></i> },
        { link: '#', icon: <i className="fab fa-twitter"></i> },
        { link: '#', icon: <i className="fab fa-instagram"></i> },
      ],
    },
    {
      image: 'https://images.stockcake.com/public/0/7/4/074a4be3-350b-41a2-aea6-930278c53b93_large/artistic-youthful-gaze-stockcake.jpg',
      name: 'Ann Richmond',
      role: 'Desingner',
      details: 'Responsible for assisting and maintaining the cleints desired designs.',
      socials: [
        { link: '#', icon: <i className="fab fa-facebook-f"></i> },
        { link: '#', icon: <i className="fab fa-twitter"></i> },
        { link: '#', icon: <i className="fab fa-instagram"></i> },
      ],
    },
    {
      image: 'https://images.stockcake.com/public/7/0/1/70182bc8-02bf-4a5e-b839-cfc1aecd6b34_large/colorful-artistic-portrait-stockcake.jpg',
      name: 'Roxie Swanson',
      role: 'Printing Provider',
      details: 'Handles all our printing needs and ensures high-quality, on-time deliveries.',
      socials: [
        { link: '#', icon: <i className="fab fa-facebook-f"></i> },
        { link: '#', icon: <i className="fab fa-twitter"></i> },
        { link: '#', icon: <i className="fab fa-instagram"></i> },
      ],
    },
  ];

  return (
    <Box className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <Typography variant="h4" align="center" gutterBottom className="text-black -mt-16">
        Meet Our Team
      </Typography>
      <Grid container spacing={4} className="max-w-[1200px] w-full mt-10">
        {teamMembers.map((member, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <TeamMember
              image={member.image}
              name={member.name}
              role={member.role}
              details={member.details}
              socials={member.socials}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MeetOurTeam;