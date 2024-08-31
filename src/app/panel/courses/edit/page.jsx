'use client'

import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Grid, List, ListItem, ListItemText, IconButton, Paper } from '@mui/material';
import { AddCircle, RemoveCircle } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './courses.module.css';
import Header from '@/components/home/Header/Header';
import Footer from '@/components/home/Footer/Footer';

const theme = createTheme({
  typography: {
    fontSize: 14,
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          marginBottom: '16px',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          marginBottom: '16px',
          fontWeight: 900,
        },
      },
    },
  },
});

const initialSection = { title: '', videoUrl: '', items: [''] };

const CourseForm = () => {
  const [courseTitle, setCourseTitle] = useState('');
  const [additionalTitle, setAdditionalTitle] = useState('');
  const [courseImage, setCourseImage] = useState(null);
  const [sections, setSections] = useState([initialSection]);
  const [documents, setDocuments] = useState([]);

  const handleAddSection = () => {
    setSections([...sections, initialSection]);
  };

  const handleRemoveSection = (index) => {
    setSections(sections.filter((_, i) => i !== index));
  };

  const handleSectionChange = (index, field, value) => {
    const newSections = [...sections];
    newSections[index][field] = value;
    setSections(newSections);
  };

  const handleItemChange = (sectionIndex, itemIndex, value) => {
    const newSections = [...sections];
    newSections[sectionIndex].items[itemIndex] = value;
    setSections(newSections);
  };

  const handleAddItem = (sectionIndex) => {
    const newSections = [...sections];
    newSections[sectionIndex].items.push('');
    setSections(newSections);
  };

  const handleRemoveItem = (sectionIndex, itemIndex) => {
    const newSections = [...sections];
    newSections[sectionIndex].items = newSections[sectionIndex].items.filter((_, i) => i !== itemIndex);
    setSections(newSections);
  };

  const handleDocumentChange = (event) => {
    setDocuments([...documents, ...event.target.files]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const courseData = {
      courseTitle,
      additionalTitle,
      courseImage,
      sections,
      documents,
    };
    console.log(courseData);
  };

  return (
    <ThemeProvider theme={theme}>
      <Header />

      <Box sx={{ p: 35, pt: 8 }}>
        <Typography variant="h4" sx={{ mb: 3 }}>
          Crear Nuevo Curso
        </Typography>
        <form onSubmit={handleSubmit}>
          <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  label="Título del Curso"
                  fullWidth
                  value={courseTitle}
                  onChange={(e) => setCourseTitle(e.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Título Adicional"
                  fullWidth
                  value={additionalTitle}
                  onChange={(e) => setAdditionalTitle(e.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  component="label"
                  sx={{ width: '350px' }}
                >
                  Subir Imagen del Curso
                  <input
                    type="file"
                    hidden
                    onChange={(e) => setCourseImage(e.target.files[0])}
                  />
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  component="label"
                  sx={{ width: '350px' }}
                >
                  Subir Documentos del Curso
                  <input
                    type="file"
                    multiple
                    hidden
                    onChange={handleDocumentChange}
                  />
                </Button>
              </Grid>
            </Grid>
          </Paper>
          {sections.map((section, sectionIndex) => (
            <Paper elevation={1} sx={{ p: 3, mb: 3 }} key={sectionIndex}>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={10}>
                  <TextField
                    label={`Título de la Sección ${sectionIndex + 1}`}
                    fullWidth
                    value={section.title}
                    onChange={(e) => handleSectionChange(sectionIndex, 'title', e.target.value)}
                    required
                  />
                </Grid>
                <Grid item xs={2}>
                  <IconButton onClick={() => handleRemoveSection(sectionIndex)} color="secondary">
                    <RemoveCircle />
                  </IconButton>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="URL del Video"
                    fullWidth
                    value={section.videoUrl}
                    onChange={(e) => handleSectionChange(sectionIndex, 'videoUrl', e.target.value)}
                    required
                  />
                </Grid>
                {section.items.map((item, itemIndex) => (
                  <Grid item xs={12} key={itemIndex}>
                    <Box display="flex" alignItems="center">
                      <TextField
                        label={`Texto ${itemIndex + 1}`}
                        fullWidth
                        value={item}
                        onChange={(e) => handleItemChange(sectionIndex, itemIndex, e.target.value)}
                        required
                      />
                      <IconButton onClick={() => handleRemoveItem(sectionIndex, itemIndex)} color="secondary">
                        <RemoveCircle />
                      </IconButton>
                    </Box>
                  </Grid>
                ))}
                <Grid item xs={12}>
                  <Button variant="outlined" onClick={() => handleAddItem(sectionIndex)}>
                    Añadir Texto
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          ))}
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Button variant="outlined" onClick={handleAddSection} sx={{ width: '350px' }}>
                Añadir Sección
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary" sx={{ width: '350px'}}>
                Crear Curso
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>

      <Footer />
    </ThemeProvider>
  );
};

export default CourseForm;
