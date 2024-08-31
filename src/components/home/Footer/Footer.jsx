'use client'

import React from 'react';
import { Box, Typography, Link as MuiLink, Grid, IconButton } from '@mui/material';
import Link from 'next/link';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <Box component="footer" sx={{
      background: 'linear-gradient(90deg, #006400, #556B2F)', color: '#fff', padding: '25px 0'
    }}>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12} md={4} sx={{ textAlign: { xs: 'center', md: 'center' }, paddingLeft: { md: '25px' }, marginBottom: { xs: 2, md: 0 } }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', display: 'inline', fontSize: '18px' }}>L</Typography>
          <Typography variant="h6" sx={{ display: 'inline', fontSize: '16px' }}>ogo</Typography>
        </Grid>
        <Grid item xs={12} md={8} sx={{ textAlign: { xs: 'center', md: 'center' } }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', marginBottom: 2 }}>
            <Link href="/about" passHref style={{ margin: '0 10px', fontWeight: 600 }}>
              About
            </Link>
            {/* <Link href="/services" passHref style={{ margin: '0 10px', fontWeight: 600 }}>
              Services
            </Link>
            <Link href="/contact" passHref style={{ margin: '0 10px', fontWeight: 600 }}>
              Contact
            </Link> */}
            <Link href="/privacy" passHref style={{ margin: '0 10px', fontWeight: 600 }}>
              Privacy
            </Link>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Link href="https://www.facebook.com" passHref>
              <FacebookIcon color="inherit" sx={{ margin: '0 5px' }} fontSize="large" />
            </Link>
            <Link href="https://www.instagram.com" passHref>
              <InstagramIcon color="inherit" sx={{ margin: '0 5px' }} fontSize="large"/>
            </Link>
            <Link href="https://www.linkedin.com" passHref>
              <LinkedInIcon color="inherit" sx={{ margin: '0 5px' }} fontSize="large"/>
            </Link>
          </Box>
        </Grid>
      </Grid>
      <Box sx={{ textAlign: 'center', marginTop: '20px' }}>
        <Typography variant="body2" color="inherit" sx={{ fontWeight: 600, fontSize: '11px'}}>
          &copy; {new Date().getFullYear()} Tu Empresa. Todos los derechos reservados.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
