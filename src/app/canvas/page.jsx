import { Box, TextField, Typography, Grid, Container } from '@mui/material';
import { People, Assignment, Store, PeopleOutline, Extension, AttachMoney, LocalShipping, MonetizationOn } from '@mui/icons-material';

const CanvasModel = () => {
  const fields = [
    { title: 'SOCIOS CLAVE', icon: <People sx={{ fontSize: 50, color: '#8c52ff' }} />, placeholder: 'Identificar colaboraciones estratégicas...' },
    { title: 'ACTIVIDADES CLAVE', icon: <Extension sx={{ fontSize: 50, color: '#8c52ff' }} />, placeholder: 'Actividades principales que realiza la empresa...' },
    { title: 'PROPUESTA DE VALOR', icon: <Store sx={{ fontSize: 50, color: '#8c52ff' }} />, placeholder: 'Productos o servicios que se ofrecen...' },
    { title: 'RELACIÓN CON CLIENTES', icon: <PeopleOutline sx={{ fontSize: 50, color: '#8c52ff' }} />, placeholder: 'Descripción de los tipos de relaciones...' },
    { title: 'RECURSOS CLAVE', icon: <Assignment sx={{ fontSize: 50, color: '#8c52ff' }} />, placeholder: 'Lista de los activos y recursos esenciales...' },
    { title: 'CANALES', icon: <LocalShipping sx={{ fontSize: 50, color: '#8c52ff' }} />, placeholder: 'Canales utilizados para llegar a los clientes...' },
    { title: 'SEGMENTO DE CLIENTES', icon: <People sx={{ fontSize: 50, color: '#8c52ff' }} />, placeholder: 'Identifica los clientes a los que la empresa desea alcanzar...' },
    { title: 'COSTOS', icon: <AttachMoney sx={{ fontSize: 50, color: '#8c52ff' }} />, placeholder: 'Detalla los costos asociados a la operación...' },
    { title: 'INGRESOS', icon: <MonetizationOn sx={{ fontSize: 50, color: '#8c52ff' }} />, placeholder: 'Describe cómo la empresa genera ingresos...' },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4, backgroundColor: '#fff', borderRadius: 2 }}>
      <Typography variant="h3" align="center" gutterBottom
        sx={{
          textAlign: 'center',
          marginBottom: '50px',
          fontSize: '32px',
          fontWeight: '900',
          background: 'linear-gradient(90deg, #5e17eb, #8c52ff)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
        }}      
      >MODELO CANVAS</Typography>
      <Grid container spacing={2}>
        {fields.map((field, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box sx={{ 
              border: '1px solid #ccc', 
              borderRadius: 2, 
              p: 2, 
              backgroundColor: '#f9f9f9', 
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' 
            }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 2 }}>
                {field.icon}
                <Typography variant="h6" sx={{
                  textAlign: 'center',
                  fontSize: '18px',
                  fontWeight: '600',
                  background: 'linear-gradient(90deg, #5e17eb, #8c52ff)',
                  '-webkit-background-clip': 'text',
                  '-webkit-text-fill-color': 'transparent',
                }}>{field.title}</Typography>
              </Box>
              <TextField
                fullWidth
                multiline
                minRows={4}
                placeholder={field.placeholder}
                variant="outlined"
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CanvasModel;
