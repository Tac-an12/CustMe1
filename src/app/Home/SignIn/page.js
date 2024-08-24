import React from 'react';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Link from '@mui/material/Link';

const SignIn = () => {
  return (
    <div>
      {/* Navigation Bar */}
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

      {/* Sign-In Form */}
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Container maxWidth="xs" className="bg-white p-8 rounded-lg shadow-lg">
          <Typography variant="h4" className="text-center text-gray-800 mb-6">
            Sign In
          </Typography>

          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            margin="normal"
            className="mb-4"
          />

          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            margin="normal"
            type="password"
            className="mb-4"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton aria-label="toggle password visibility" edge="end">
                    <VisibilityOff />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <div className="flex justify-between items-center mb-6">
            <Link href="#" underline="hover" className="text-blue-500">
              Forgot Password?
            </Link>
          </div>

          <Button
            variant="contained"
            color="primary"
            fullWidth
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Sign In
          </Button>
        </Container>
      </div>
    </div>
  );
};

export default SignIn;
