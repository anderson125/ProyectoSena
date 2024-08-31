"use client";

import React from 'react';
import { Box, Grid, Typography, Tabs, Tab, IconButton, Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import styles from './searchs.module.css';
import Footer from '@/components/home/Footer/Footer';
import Link from 'next/link';
import Header from '@/components/Header/Header';

const courses = [
  {
    title: "Economía Circular",
    description: "La economía circular es un enfoque de producción y consumo que implica compartir, alquilar, reutilizar, reparar, renovar y reciclar materiales y productos existentes durante el mayor tiempo posible. ",
    teacher: "Juanito",
    image: "/homeImages/homeCourses1.jpeg"
  },
];

const Home = () => {
  const [tabIndex, setTabIndex] = React.useState(0);
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <>
      <Header />

      <Box className={styles.container}>
        <Box className={styles.header}>
          <Typography variant="h1" className={styles.headerTitle}>1 Resultados encontrados</Typography>
          <Tabs value={tabIndex} onChange={handleTabChange} className={styles.tabs}>
            <Tab label="DESTACADO 562" className={`${styles.tab} ${tabIndex === 0 ? styles.active : ''}`} />
            <Tab label="ESCUELAS 2" className={`${styles.tab} ${tabIndex === 1 ? styles.active : ''}`} />
            <Tab label="CURSOS 99" className={`${styles.tab} ${tabIndex === 2 ? styles.active : ''}`} />
            <Tab label="CLASES 449" className={`${styles.tab} ${tabIndex === 3 ? styles.active : ''}`} />
          </Tabs>
          <IconButton edge="start" color="inherit" aria-label="menu" className={styles.menuButton} onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
            <Box
              className={styles.drawerList}
              role="presentation"
              onClick={toggleDrawer(false)}
              onKeyDown={toggleDrawer(false)}
            >
              <ul className={styles.list}>
                {['DESTACADO 562', 'ESCUELAS 2', 'CURSOS 99', 'CLASES 449'].map((text, index) => (
                  <li
                    key={text}
                    className={styles.listItem}
                    onClick={(event) => handleTabChange(event, index)}
                  >
                    <p className={styles.l}>{text}</p>
                  </li>
                ))}
              </ul>
            </Box>
          </Drawer>
        </Box>

        <Box className={styles.section}>
          <Typography variant="h2" className={styles.sectionTitle}>Cursos</Typography>
          {courses.map((course, index) => (
            <Link href='/courses' key={index}>
              <Box key={index} className={styles.card}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={4}>
                    <img src={course.image} alt={course.title} />
                  </Grid>
                  <Grid item xs={12} sm={8} className={styles['padding__text__courses']}>
                    <Typography variant="h3" className={styles.courseTitle}>{course.title}</Typography>
                    <Typography variant="body1" className={styles.courseDesc}>{course.description}</Typography>
                    <Typography variant="body2" className={styles.courseFooter}>Profe: {course.teacher}</Typography>
                  </Grid>
                </Grid>
              </Box>
            </Link>
          ))}
        </Box>

        {/* <Box className={styles.section}>
          <Typography variant="h2" className={styles.sectionTitle}>Escuelas</Typography>
          {courses.map((course, index) => (
            <Box key={index} className={styles.card}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                  <img src={course.image} alt={course.title} />
                </Grid>
                <Grid item xs={12} sm={8}>
                  <Typography variant="h3" className={styles.courseTitle}>{course.title}</Typography>
                  <Typography variant="body1" className={styles.courseDesc}>{course.description}</Typography>
                  <Typography variant="body2" className={styles.courseFooter}>Profe: {course.teacher}</Typography>
                </Grid>
              </Grid>
            </Box>
          ))}
        </Box>

        <Box className={styles.section}>
          <Typography variant="h2" className={styles.sectionTitle}>Clases</Typography>
          {courses.map((course, index) => (
            <Box key={index} className={styles.card}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                  <img src={course.image} alt={course.title} />
                </Grid>
                <Grid item xs={12} sm={8}>
                  <Typography variant="h3" className={styles.courseTitle}>{course.title}</Typography>
                  <Typography variant="body1" className={styles.courseDesc}>{course.description}</Typography>
                  <Typography variant="body2" className={styles.courseFooter}>Profe: {course.teacher}</Typography>
                </Grid>
              </Grid>
            </Box>
          ))}
        </Box> */}
      </Box>

      <Footer />
    </>
  );
};

export default Home;
