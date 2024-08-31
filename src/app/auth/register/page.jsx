// pages/register.js
"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Box, Typography, TextField, Button, FormControlLabel, Checkbox } from '@mui/material';
import Swal from 'sweetalert2';
import styles from './Register.module.css'; // Utilizamos las mismas clases para mantener el estilo consistente

export default function Register() {
    const router = useRouter();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        birthDate: '',
        isDisplaced: false,
        acceptedTerms: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleRegister = () => {
        if (!formData.acceptedTerms) {
            Swal.fire({
                icon: 'error',
                title: 'Registration failed',
                text: 'You must accept the terms and conditions to register.',
            });
            return;
        }

        // Simular el registro y guardar los datos del usuario
        localStorage.setItem('user', JSON.stringify(formData));
        Swal.fire({
            icon: 'success',
            title: 'Registration successful!',
            text: 'You have successfully registered.',
        });

        router.push('/users/profile'); // Redireccionar al perfil del usuario
    };

    const goToLogin = () => {
        router.push('/auth/login'); // Redirigir a la página de login
    };

    return (
        <div className={styles.root}>
            <div className={styles.sideImage}>
                <Box>
                    <Typography variant="h3" component="div">Welcome Page</Typography>
                    <Typography variant="h6" component="div">Create an account to continue</Typography>
                    <Typography variant="body1" component="div" style={{ marginBottom: '10px' }}>Already have an account?</Typography>
                    <Button
                        variant="outlined"
                        onClick={goToLogin}
                        className={styles.loginButton} // Añadir clase para estilos personalizados
                    >
                        Login
                    </Button>

                </Box>
            </div>
            <div className={styles.loginForm}>
                <div className={styles.formContainer}>
                    <Typography variant="h4" component="div" gutterBottom>Register</Typography>
                    <TextField
                        fullWidth
                        label="Full Name"
                        variant="outlined"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <TextField
                        fullWidth
                        margin='normal'
                        label="Email Address"
                        variant="outlined"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <TextField
                        fullWidth
                        margin='normal'
                        label="Password"
                        type="password"
                        variant="outlined"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    <TextField
                        fullWidth
                        margin='normal'
                        label="Birth Date"
                        type="date"
                        variant="outlined"
                        name="birthDate"
                        InputLabelProps={{ shrink: true }}
                        value={formData.birthDate}
                        onChange={handleChange}
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="isDisplaced"
                                checked={formData.isDisplaced}
                                onChange={handleChange}
                            />
                        }
                        label="Are you displaced?"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="acceptedTerms"
                                checked={formData.acceptedTerms}
                                onChange={handleChange}
                            />
                        }
                        label="I accept the terms and conditions"
                    />
                    <Button
                        fullWidth
                        variant="contained"
                        className={styles.gradientButton}
                        onClick={handleRegister}
                    >
                        Register
                    </Button>
                </div>
            </div>
        </div>
    );
}
