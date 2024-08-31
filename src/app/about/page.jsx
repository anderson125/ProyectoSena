'use client'

import React from 'react';
import Image from 'next/image';
import { 
  AppBar, Toolbar, Typography, Button, Container, Box, Grid, Card, CardContent, Avatar, 
  List, ListItem, ListItemIcon, ListItemText, useTheme, useMediaQuery
} from '@mui/material';
import { Star, CheckCircle, Lightbulb, Rocket } from '@mui/icons-material';
import Header from '@/components/home/Header/Header';
import Footer from '@/components/home/Footer/Footer';

export default function HomePage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box>
      <Header />

      <Container maxWidth="lg">
        <Box sx={{ my: 4, mt: 8 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h2" component="h1" gutterBottom sx={{ fontSize: '28px' }}>
                Empower Your Future with Online Learning
              </Typography>
              <Typography variant="h5" paragraph sx={{ fontSize: '15px' }}>
                Join our community of learners and unlock your potential with our expert-led courses.
              </Typography>
              <Button variant="contained" color="primary" size="large">
                Explore Courses
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Image
                src="/homeImages/useabout.jpeg"
                alt="Students learning"
                width={600}
                height={400}
                layout="responsive"
              />
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ my: 4 }}>
          <Grid container spacing={4} justifyContent="center">
            <Grid item>
              <Typography variant="h4" align="center" sx={{ fontSize: '15px' }}>10k+</Typography>
              <Typography variant="subtitle1" align="center" sx={{ fontSize: '15px' }}>Students</Typography>
            </Grid>
            <Grid item>
              <Typography variant="h4" align="center" sx={{ fontSize: '15px' }}>200+</Typography>
              <Typography variant="subtitle1" align="center" sx={{ fontSize: '15px' }}>Courses</Typography>
            </Grid>
            <Grid item>
              <Typography variant="h4" align="center" sx={{ fontSize: '15px' }}>4.8</Typography>
              <Typography variant="subtitle1" align="center" sx={{ fontSize: '15px' }}>
                <Star color="primary" /> Coursera
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h4" align="center" sx={{ fontSize: '15px' }}>4.7</Typography>
              <Typography variant="subtitle1" align="center" sx={{ fontSize: '15px' }}>
                <Star color="primary" /> Udemy
              </Typography>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ my: 4 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <CheckCircle color="primary" />
                  <Typography variant="h6" component="div" sx={{ fontSize: '15px' }}>
                    Quality Content
                  </Typography>
                  <Typography variant="body2" sx={{ fontSize: '15px' }}>
                    Our courses are crafted by industry experts to ensure you receive the most up-to-date and relevant education.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <Lightbulb color="primary" />
                  <Typography variant="h6" component="div" sx={{ fontSize: '15px' }}>
                    Flexible Learning
                  </Typography>
                  <Typography variant="body2" sx={{ fontSize: '15px' }}>
                    Learn at your own pace with our on-demand video lectures and interactive assignments.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <Rocket color="primary" />
                  <Typography variant="h6" component="div" sx={{ fontSize: '15px' }}>
                    Career Advancement
                  </Typography>
                  <Typography variant="body2" sx={{ fontSize: '15px' }}>
                    Gain skills that are in high demand and boost your career prospects with our industry-aligned curriculum.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ my: 4 }}>
          <Typography variant="h4" gutterBottom align="center" sx={{ fontSize: '25px' }}>
            Our Mission
          </Typography>
          <Typography variant="body1" paragraph align="center" sx={{ fontSize: '15px' }}>
            At LearnPro, we're committed to democratizing education and empowering individuals to reach their full potential through accessible, high-quality online learning experiences.
          </Typography>
        </Box>

        <Box sx={{ my: 4 }}>
          <Typography variant="h4" gutterBottom align="center" sx={{ fontSize: '15px' }}>
            Join thousands of learners on their path to success
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            {['2019', '2020', '2021', '2022', '2023'].map((year) => (
              <Grid item key={year}>
                <Typography variant="h6" sx={{ fontSize: '15px' }}>{year}</Typography>
              </Grid>
            ))}
          </Grid>
          <Box sx={{ mt: 2 }}>
            <Image
              src="/homeImages/useabout.jpeg"
              alt="Growth chart"
              width={800}
              height={200}
              layout="responsive"
            />
          </Box>
        </Box>

        <Box sx={{ my: 4, mb: 10 }}>
          <Typography variant="h4" gutterBottom align="center" sx={{ fontSize: '25px' }}>
            Meet our Expert Instructors
          </Typography>
          <Grid container spacing={4} justifyContent={isMobile ? 'flex-start' : 'center'}>
            {[
              { name: "Dr. Emily Chen", role: "Data Science Expert", image: "/userImages/woman1.png" },
              { name: "Prof. Michael Johnson", role: "Computer Science Guru", image: "/userImages/men.png" }
            ].map((instructor) => (
              <Grid item xs={12} sm={6} md={4} key={instructor.name} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Box display="flex" alignItems="center" flexDirection="column">
                  <Avatar
                    alt={instructor.name}
                    src={instructor.image}
                    sx={{ width: 150, height: 150, mb: 2, mt: 3 }}
                  />
                  <Box textAlign="center">
                    <Typography variant="h6" sx={{ fontSize: '15px' }}>{instructor.name}</Typography>
                    <Typography variant="subtitle1" color="textSecondary" sx={{ fontSize: '15px' }}>
                      {instructor.role}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>

      <Footer />
    </Box>
  );
}
