'use client'

import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Box, Drawer, List, ListItem, ListItemText, Avatar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'));
    if (userData) {
      setUser(userData);
    }
  }, []);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    router.push('/auth/login');
  };

  const drawerList = (
    <Box
      sx={{
        width: 250,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List sx={{ width: '100%' }}>
        <Link href="/" passHref>
          <ListItem button sx={{ justifyContent: 'center' }}>
            <ListItemText
              primary="Home"
              sx={{ fontSize: '15px', fontWeight: 600, textAlign: 'center' }} // Centra el texto
              primaryTypographyProps={{ fontSize: '15px', fontWeight: 600 }}
            />
          </ListItem>
        </Link>
        <Link href="/about" passHref>
          <ListItem button sx={{ justifyContent: 'center' }}>
            <ListItemText
              primary="About"
              sx={{ fontSize: '15px', fontWeight: 600, textAlign: 'center' }} // Centra el texto
              primaryTypographyProps={{ fontSize: '15px', fontWeight: 600 }}
            />
          </ListItem>
        </Link>
        <Link href="/contact" passHref>
          <ListItem button sx={{ justifyContent: 'center' }}>
            <ListItemText
              primary="Contact"
              sx={{ fontSize: '15px', fontWeight: 600, textAlign: 'center' }} // Centra el texto
              primaryTypographyProps={{ fontSize: '15px', fontWeight: 600 }}
            />
          </ListItem>
        </Link>
        {user ? (
          <>
            <Link href="/profile" passHref>
              <ListItem button sx={{ justifyContent: 'center' }}>
                <ListItemText
                  primary="Perfil"
                  sx={{ fontSize: '15px', fontWeight: 600, textAlign: 'center' }} // Centra el texto
                  primaryTypographyProps={{ fontSize: '15px', fontWeight: 600 }}
                />
              </ListItem>
            </Link>
            <ListItem button onClick={handleLogout} sx={{ justifyContent: 'center' }}>
              <ListItemText
                primary="Cerrar Sesión"
                sx={{ fontSize: '15px', fontWeight: 600, textAlign: 'center' }} // Centra el texto
                primaryTypographyProps={{ fontSize: '15px', fontWeight: 600 }}
              />
            </ListItem>
          </>
        ) : (
          <Link href="/auth/login" passHref>
            <ListItem button sx={{ justifyContent: 'center' }}>
              <ListItemText
                primary="Ingresar"
                sx={{ fontSize: '15px', fontWeight: 600, textAlign: 'center' }} // Centra el texto
                primaryTypographyProps={{ fontSize: '15px', fontWeight: 600 }}
              />
            </ListItem>
          </Link>
        )}
      </List>
    </Box>
  );



  return (
    <AppBar
      position="static"
      sx={{
        height: '60px',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        marginBottom: '-60px',
        boxShadow: 'none'
      }}
    >
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', color: '#006400', fontSize: '19px' }}>
          <Link href="/">
            <span style={{ fontWeight: 'bold', fontSize: '20px' }}>L</span>ogo
          </Link>
        </Typography>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1, justifyContent: 'center' }}>
          <Link href="/" passHref>
            <Button color="inherit" sx={{ color: '#006400', fontSize: '13px', fontWeight: '900' }}>Home</Button>
          </Link>
          <Link href="/about" passHref>
            <Button color="inherit" sx={{ color: '#006400', fontSize: '13px', fontWeight: '900' }}>About</Button>
          </Link>
          {/* <Link href="/contact" passHref>
            <Button color="inherit" sx={{ color: '#006400', fontSize: '13px', fontWeight: '900' }}>Contact</Button>
          </Link> */}
        </Box>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
          {user ? (
            <>
              <Link href="/users/profile" passHref>
                <IconButton>
                  <Avatar src={user.image} alt={user.name} />
                </IconButton>
              </Link>
              <Button color="inherit" sx={{ color: '#006400', fontSize: '13px', fontWeight: '900' }} onClick={handleLogout} startIcon={<LogoutIcon />}>Cerrar Sesión</Button>
            </>
          ) : (
            <Link href="/auth/login" passHref>
              <Button color="inherit" sx={{ color: '#006400', fontSize: '13px', fontWeight: '900' }} startIcon={<LoginIcon />}>Ingresar</Button>
            </Link>
          )}
        </Box>
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton color="inherit" edge="start" onClick={toggleDrawer(true)}>
            <MenuIcon sx={{ fontSize: 20, color: '#006400' }} />
          </IconButton>
          <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
            {drawerList}
          </Drawer>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
