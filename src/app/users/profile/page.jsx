// pages/Profile.js

"use client"

// pages/Profile.js
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Avatar, Box, Button, Container, Divider, IconButton, List, ListItem, ListItemIcon, ListItemText, Paper, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import LockIcon from '@mui/icons-material/Lock';
import InfoIcon from '@mui/icons-material/Info';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import styles from './Profile.module.css';
import Header from '@/components/Header/Header';
import Footer from '@/components/home/Footer/Footer';

export default function Profile() {
  const [userData, setUserData] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setUserData(user);
    } else {
      router.push('/login');
    }
  }, [router]);

  const handleEdit = (field) => {
    // Logic for handling edits
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    router.push('/login');
  };

  if (!userData) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <>
      <Header />
      <Container className={styles.container}>
        <Paper elevation={3} className={styles.paper}>
          <Box className={styles.header}>
            <Avatar src={userData.image} alt={userData.name} className={styles.avatar} />
            <Box className={styles.info}>
              <Typography variant="h6" className={styles.name}>
                {userData.name}
                <IconButton className={styles.editButton} onClick={() => handleEdit('name')}>
                  <EditIcon fontSize="small" color="success" />
                </IconButton>
              </Typography>
              <Typography variant="body1" className={styles.id}>
                {userData.phone}
              </Typography>
            </Box>
          </Box>
          <Divider />
          <List>
            <ListItem button>
              <ListItemIcon><ContactMailIcon color="success" /></ListItemIcon>
              <ListItemText primaryTypographyProps={{ fontSize: '14px' }} primary='Mi Membresía' />
            </ListItem>
            <ListItem button>
              <ListItemIcon><InfoIcon color="success" /></ListItemIcon>
              <ListItemText primaryTypographyProps={{ fontSize: '14px' }} primary="Contáctanos" />
            </ListItem>
            <ListItem button>
              <ListItemIcon><LockIcon color="success" /></ListItemIcon>
              <ListItemText primaryTypographyProps={{ fontSize: '14px' }} primary="Política de Privacidad" />
            </ListItem>
            <ListItem button>
              <ListItemIcon><InfoIcon color="success" /></ListItemIcon>
              <ListItemText primaryTypographyProps={{ fontSize: '14px' }} primary="Términos y Condiciones" />
            </ListItem>
            <ListItem button onClick={handleLogout}>
              <ListItemIcon><ExitToAppIcon color="success" /></ListItemIcon>
              <ListItemText primaryTypographyProps={{ fontSize: '14px' }} primary="Cerrar Sesión" />
            </ListItem>
          </List>
        </Paper>
      </Container>

      <Footer />
    </>

  );
}
