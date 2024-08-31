import React from 'react';
import Image from 'next/image';
import { Box, Container, Typography, Link } from '@mui/material';
import { Facebook, Instagram, WhatsApp } from '@mui/icons-material';

import styles from './SimpleContactLandingPage.module.css';
import Header from '@/components/Header/Header';
import Footer from '@/components/home/Footer/Footer';

import imagenSection from '/public/homeImages/homeCourses.jpeg';

const ContactLandingPage = () => {

    return (
        <>
            <Header />

            <Container maxWidth="lg" className={styles.container}>
                <Box className={styles.content}>
                    <Box className={styles.imageContainer}>
                        <Image src={imagenSection} alt="Contacto" width={300} height={200} className={styles.image} />
                    </Box>
                    <Box className={styles.contactDetails}>
                        <Box className={styles.header}>
                            <Typography variant="h3" component="h1" className={styles.title}>
                                Contáctanos
                            </Typography>
                        </Box>
                        <Box className={styles.introduction}>
                            <Typography variant="body1" className={styles.text}>
                                Si tienes alguna pregunta, comentario o necesitas más información, no dudes en ponerte en contacto con nosotros.
                            </Typography>
                        </Box>
                        <Box className={styles.detail}>
                            <WhatsApp className={styles.icon} />
                            <Typography variant="h6">
                                <Link href="https://wa.me/123456789" target="_blank">+123 456 789</Link>
                            </Typography>
                        </Box>
                        <Box className={styles.detail}>
                            <Facebook className={styles.icon} />
                            <Typography variant="h6">
                                <Link href="https://www.facebook.com" target="_blank">Facebook</Link>
                            </Typography>
                        </Box>
                        <Box className={styles.detail}>
                            <Instagram className={styles.icon} />
                            <Typography variant="h6">
                                <Link href="https://www.instagram.com" target="_blank">Instagram</Link>
                            </Typography>
                        </Box>
                        <Box className={styles.detail}>
                            <Typography variant="h6">
                                Correo: <Link href="mailto:info@example.com">info@example.com</Link>
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Container>

            <Footer />
        </>
    );
};

export default ContactLandingPage;
