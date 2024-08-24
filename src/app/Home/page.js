// src/components/CustMeHome.js
import React from 'react';
import Button from '@mui/material/Button';
import Link from 'next/link';

function CustMeHome() {
  return (
    <div className="min-h-screen bg-gray-200">
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
      <div className="flex justify-center mt-16">
        <div className="bg-white w-96 h-80 p-8 flex flex-col items-center justify-center">
          <Button variant="text" className="text-black font-bold text-xl">
            Personalize your world with
          </Button>
          <Button variant="text" className="text-black font-bold mt-1 text-xl">
            CusTMe
          </Button>
          <Button variant="text" className="text-black font-normal mt-1 text-xl text-center">
            Connect Designers and Printing providers
          </Button>
          <div className="flex space-x-6 mt-7">
            <Link href="/Home/SignUp" passHref>
              <Button variant="contained" className="bg-yellow-500 rounded text-white font-semibold px-5 py-2">
                Sign Up
              </Button>
            </Link>
            <Link href="/Home/Join" passHref>
              <Button variant="contained" className="bg-white rounded text-black font-semibold px-5 py-2">
                Join
              </Button>
            </Link>
          </div>
        </div>

        <div className="w-96 h-80 ml-3">
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Your Image"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}

export default CustMeHome;
