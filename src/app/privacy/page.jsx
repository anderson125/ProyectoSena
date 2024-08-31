import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import styles from './DataPolicyLandingPage.module.css';
import Footer from '@/components/home/Footer/Footer';
import Header from '@/components/Header/Header';

const DataPolicyLandingPage = () => {
    return (
        <>
            <Header />
            
            <Container maxWidth="lg" className={styles.container}>
                <Box className={styles.header}>
                    <Typography variant="h3" component="h1" className={styles.title}>
                        Tratamiento y Políticas de Datos
                    </Typography>
                </Box>
                <Box className={styles.introduction}>
                    <Typography variant="h5" component="h2" className={styles.subtitle}>
                        Introducción
                    </Typography>
                    <Typography variant="body1" className={styles.text}>
                        En nuestra empresa, valoramos su privacidad y estamos comprometidos con la protección de sus datos personales.
                        A continuación, se detallan nuestras políticas de tratamiento de datos y privacidad.
                    </Typography>
                </Box>
                <Box className={styles.section}>
                    <Typography variant="h5" component="h2" className={styles.subtitle}>
                        Tratamiento de Datos
                    </Typography>
                    <Typography variant="body1" className={styles.text}>
                        Recopilamos y utilizamos sus datos personales solo para los fines específicos que le hemos comunicado. Estos fines incluyen:
                    </Typography>
                    <Typography variant="body1" className={styles.text}>
                        - Prestación de servicios solicitados.
                    </Typography>
                    <Typography variant="body1" className={styles.text}>
                        - Envío de comunicaciones relevantes y personalizadas.
                    </Typography>
                    <Typography variant="body1" className={styles.text}>
                        - Mejora de nuestros servicios y productos.
                    </Typography>
                </Box>
                <Box className={styles.section}>
                    <Typography variant="h5" component="h2" className={styles.subtitle}>
                        Políticas de Privacidad
                    </Typography>
                    <Typography variant="body1" className={styles.text}>
                        Nos comprometemos a proteger su privacidad mediante las siguientes acciones:
                    </Typography>
                    <Typography variant="body1" className={styles.text}>
                        - No vender ni compartir su información personal con terceros sin su consentimiento.
                    </Typography>
                    <Typography variant="body1" className={styles.text}>
                        - Implementar medidas de seguridad para proteger sus datos personales.
                    </Typography>
                    <Typography variant="body1" className={styles.text}>
                        - Permitirle acceder y controlar la información que tenemos sobre usted.
                    </Typography>
                </Box>
                <Box className={styles.section}>
                    <Typography variant="h5" component="h2" className={styles.subtitle}>
                        Contacto
                    </Typography>
                    <Typography variant="body1" className={styles.text}>
                        Si tiene alguna pregunta o inquietud sobre nuestras políticas de datos, no dude en contactarnos a través de nuestro sitio web o por correo electrónico.
                    </Typography>
                </Box>
            </Container>

            <Footer />
        </>
    );
};

export default DataPolicyLandingPage;
