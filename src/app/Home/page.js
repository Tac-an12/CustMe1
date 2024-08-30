import React from 'react';
import Button from '@mui/material/Button';
import Link from 'next/link';
import HeaderHome from '../component/header';



function CustMeHome() {
  return (
    <div className="min-h-screen bg-gray-200">
    <HeaderHome/>
      <div className="pt-48"> 
        <div className="flex justify-center">
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
    </div>
  );
}

export default CustMeHome;
