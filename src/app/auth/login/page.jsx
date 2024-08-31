// pages/login.js
"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { Box, Typography, TextField, Button } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

import Swal from 'sweetalert2';
import styles from './Login.module.css';

const validUsers = [
  {
    email: 'user1@example.com',
    password: 'password123',
    data: {
      phone: '123-456-7890',
      age: 22,
      name: 'John Doe',
      address: '123 Main St, New York, NY 10001',
      image: '/userImages/men.png',
    },
  },
  {
    email: 'user2@example.com',
    password: 'password456',
    data: {
      phone: '987-654-3210',
      age: 27,
      name: 'Jane Smith',
      address: '456 Elm St, Los Angeles, CA 90001',
      image: '/userImages/women1.png',
    },
  },
  {
    email: 'user3@example.com',
    password: 'password789',
    data: {
      phone: '555-555-5555',
      age: 24,
      name: 'Alice Johnson',
      address: '789 Oak St, Chicago, IL 60007',
      image: '/userImages/women2.png',
    },
  },
];

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const user = validUsers.find(user => user.email === email && user.password === password);
    if (user) {
      localStorage.setItem('user', JSON.stringify(user.data));
      Swal.fire({
        icon: 'success',
        title: 'Login successful!',
        text: 'You have successfully logged in.',
      });

      router.push('/users/profile');
      // You can redirect the user to another page here if needed
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Login failed',
        text: 'Invalid email or password.',
      });
    }
  };

  const goToRegister = () => {
    router.push('/auth/register'); // Redirigir a la página de login
  };

  return (
    <div className={styles.root}>
      <div className={styles.sideImage}>
        <Box>
            <Typography variant="h3" component="div">Welcome Page</Typography>
            <Typography variant="h6" component="div">Create an account to continue</Typography>
            <Typography variant="body1" component="div" style={{ marginBottom: '10px' }}>Already have an account?</Typography>
            <Button
              variant="outlined"
              onClick={goToRegister}
              className={styles.loginButton} // Añadir clase para estilos personalizados
            >
              register
            </Button>
          </Box>
      </div>
      <div className={styles.loginForm}>
        <div className={styles.formContainer}>
          <Typography variant="h4" component="div" gutterBottom>Sign In</Typography>
          <TextField
            fullWidth
            margin="normal"
            label="Email Address"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Password"
            type="password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            fullWidth
            variant="contained"
            className={styles.gradientButton}
            onClick={handleLogin}
          >
            Continue
          </Button>
          <Typography variant="body1" component="div" align="center" marginTop="20px">
            or Connect with Social Media
          </Typography>
          <Button
            fullWidth
            margin= 'normal'
            variant="contained"
            startIcon={<TwitterIcon />}
            className={styles.socialButton}
          >
            Sign in with Twitter
          </Button>
          <Button
            fullWidth
            margin= 'normal'
            variant="contained"
            startIcon={<FacebookIcon />}
            className={styles.socialButton}
          >
            Sign in with Facebook
          </Button>
        </div>
      </div>
    </div>
  );
}
