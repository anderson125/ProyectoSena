import React from 'react';
import { Box, Typography, TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const CourseSearchSection = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url('/homeImages/homeCourses.svg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '240px 0',
        textAlign: 'center',
        color: '#000',
      }}
    >
      <Typography
        variant="h3"
        gutterBottom
        sx={{
          fontSize: 38,
          fontWeight: 900,
          background: 'linear-gradient(90deg, var(--primary--color), var(--tertiary--color))',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
        }}
      >
        Encuentra los mejores cursos
      </Typography>
      <Typography variant="body1" gutterBottom sx={{ fontSize: 18 }}>
        Aprende nuevas habilidades con nuestros cursos en línea.
      </Typography>
      <Box sx={{ maxWidth: 400, margin: 'auto', marginTop: 2 }}>
        <TextField
          id="search"
          label="Buscar cursos"
          variant="outlined"
          fullWidth
          InputLabelProps={{
            style: { color: '#000', fontSize: '16px' },
          }}
          InputProps={{
            style: { color: '#000', fontSize: '16px' },
            classes: {
              notchedOutline: 'custom-outline',
            },
          }}
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'rgba(255, 255, 255, 0.5)',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#000',
              },
            },
            '& .MuiInputBase-input': {
              color: '#000',
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default CourseSearchSection;
