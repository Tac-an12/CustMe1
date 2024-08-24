import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link';

const ServicePage = () => {
  return (
    <div>
      <div className="bg-white p-4 flex justify-between items-center shadow-md">
        <Button variant="text" className="text-black font-extrabold text-4xl ml-8">
          <span className="text-blue-500">C</span>
          <span className="text-blue-500">u</span>
          <span className="text-blue-500">s</span>
          <span className="text-yellow-500">t</span>
          <span className="text-blue-500">M</span>
          <span className="text-yellow-500">e</span>
        </Button>
        <div className="flex justify-end items-center">
        <Link href="/Home" passHref>
            <Button variant="text" className="text-black font-semibold mr-4">
              Home
            </Button>
          </Link>
          <Link href="/Home/About" passHref>
            <Button variant="text" className="text-black font-semibold">
              About
            </Button>
          </Link>
          <Link href="/Home/Services" passHref>
            <Button variant="text" className="text-black font-semibold ml-4">
              Services
            </Button>
          </Link>
          <Link href="/Home/SignIn" passHref>
            <Button variant="contained" className="bg-yellow-500 rounded text-white ml-8 font-semibold px-5 py-2">
              Sign In
            </Button>
          </Link>
        </div>
      </div>
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Container maxWidth="md" className="bg-gray-100 p-8 rounded-lg shadow-lg">
          <Typography variant="h3" className="text-center text-gray-800 mb-6 font-bold">
            Service Offered
          </Typography>
          <Typography variant="body1" className="text-gray-700 mb-6 text-justify">
            The CustMe platform aims to enable greater personalization and customization in retail, 
            supporting freelance designers, small printing businesses, and clients' demands. 
            It advances web and digital printing technologies. 
            This represents an opportunity to boost entrepreneurship and economic 
            productivity by granting businesses and independent professionals access to a 
            broader market, addressing the limitations of traditional retail in meeting 
            the growing consumer demand for personalized items.
          </Typography>
        </Container>
      </div>
    </div>
  );
};

export default ServicePage;
