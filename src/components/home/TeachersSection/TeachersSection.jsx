import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import styles from './ProfesorCardSection.module.css';

const ProfesorCardSection = () => {
  const profesores = [
    { name: 'Adriana Restrepo', description: 'Profesional en desarrollo de estrategias para el mejoramientos de los territorios', image: '/userImages/woman1.png' },
    { name: 'Anderson Lopez', description: 'profesional en vehiculos, negocios internacionales.', image: '/userImages/men.png' },
    { name: 'Andrea Lozano', description: 'experta en cocina, comida paisa y una amplia gama de no se que mas mrd inventarme jajaja', image: '/userImages/woman2.png' },
  ];

  return (
    <Box>
      <Typography
        variant="h2"
        gutterBottom
        sx={{
          textAlign: 'center',
          marginBottom: '10px',
          marginTop: '35px',
          fontSize: '32px',
          fontWeight: 'bold',
          background: 'linear-gradient(90deg, #006400, #006400)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
        }}
      >
        Nuestros profesores destacados
      </Typography>
      <Box className={styles.profesorSection}>
        {profesores.map((profesor, index) => (
          <Box key={index} className={styles.card}>
            <Avatar src={profesor.image} alt={profesor.name} className={styles.avatar} />
            <Box className={styles.cardContent}>
              <Typography variant="h6" className={styles.name}>{profesor.name}</Typography>
              <Box className={styles.stars}>
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className={styles.starIcon} />
                ))}
              </Box>
              <Typography variant="body2" className={styles.description}>{profesor.description}</Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ProfesorCardSection;
