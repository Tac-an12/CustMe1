import React from 'react';
import { Button, Typography } from '@mui/material';
import Link from 'next/link'; 

const HeaderHome = () => {
  return (
    <div className="bg-white p-4 flex justify-between items-center shadow-md fixed top-0 left-0 right-0 z-50">
        <Button variant="text" className="text-black font-extrabold text-4xl ml-8">
          <span className="text-blue-500">C</span>
          <span className="text-blue-500">u</span>
          <span className="text-blue-500">s</span>
          <span className="text-yellow-500">t</span>
          <span className="text-blue-500">M</span>
          <span className="text-yellow-500">e</span>
        </Button>
        <div className="flex items-center">
          <Link href="/Home" underline="hover" className="text-black font-semibold mr-4">
            Home
          </Link>
          <Link href="/Home/About" underline="hover" className="text-black font-semibold mr-4">
            About
          </Link>
          <Link href="/Home/Services" underline="hover" className="text-black font-semibold mr-4">
            Services
          </Link>
          <Link href="/Home/SignIn" underline="hover">
            <Button variant="contained" className="bg-yellow-500 rounded text-white font-semibold px-5 py-2">
              Sign In
            </Button>
          </Link>
        </div>
    </div>
  );
};

export default HeaderHome;
