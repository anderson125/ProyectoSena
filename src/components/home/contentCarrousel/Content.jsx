'use client'

import { useState } from 'react'
import Image from 'next/image'
import { PlayCircle, Users, LineChart, Sparkles, Download, BarChart, Calendar } from 'lucide-react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { CssBaseline, Box, Typography, List, ListItem, ListItemIcon, ListItemText, useMediaQuery } from '@mui/material'

const theme = createTheme({
    palette: {
        primary: {
            main: '#4caf50',
        },
        background: {
            default: '#ffffff',
        },
    },
    typography: {
        h3: {
            fontSize: '2.5rem',
            '@media (min-width:600px)': {
                fontSize: '3rem',
            },
        },
        h4: {
            fontSize: '2rem',
            '@media (min-width:600px)': {
                fontSize: '2.5rem',
            },
        },
        h5: {
            fontSize: '1.5rem',
            '@media (min-width:600px)': {
                fontSize: '2rem',
            },
        },
        body1: {
            fontSize: '1rem',
            '@media (min-width:600px)': {
                fontSize: '1.25rem',
            },
        },
    },
})

const sidebarItems = [
    { icon: PlayCircle, text: "Aprende algo nuevo cada 5 minutos", image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg" }, // Imagen de oficina
    { icon: Users, text: "Rutas profesionales te guían de principiante a profesional", image: "https://images.pexels.com/photos/3183170/pexels-photo-3183170.jpeg" }, // Imagen de colaboración
    { icon: LineChart, text: "Pon a prueba tu progreso de forma interactiva", image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg" }, // Imagen de estadísticas
    { icon: Sparkles, text: "Inteligencia artificial y comunidad que responde tus dudas", image: "https://images.pexels.com/photos/3182822/pexels-photo-3182822.jpeg" }, // Imagen de tecnología
    { icon: Download, text: "Descarga las clases a tu teléfono y aprende sin Internet", image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg" }, // Imagen de dispositivos
    { icon: BarChart, text: "Mide el progreso de tu empresa", image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg" }, // Imagen de gráficas
    { icon: Calendar, text: "Organiza el aprendizaje de tu equipo", image: "https://images.pexels.com/photos/3182749/pexels-photo-3182749.jpeg" }, // Imagen de calendario
  ]

export default function ComponentCarrousel() {
    const [selectedImage, setSelectedImage] = useState(sidebarItems[0].image)
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} minHeight="100vh">
                {/* Sidebar */}
                <Box width="100%" bgcolor="grey.100" p={4}>
                    <Typography variant="h3" fontWeight="bold" mb={4}>
                        <Box component="span" color="primary.main">Somos la autoridad</Box> en
                        escalar la educación en
                        línea en América Latina
                    </Typography>
                    <List>
                        {sidebarItems.map((item, index) => (
                            <SidebarItem
                                key={index}
                                icon={<item.icon size={32} />}
                                text={item.text}
                                onClick={() => setSelectedImage(item.image)}
                            />
                        ))}
                    </List>
                </Box>

                {/* Main Content */}
                {!isMobile && (
                    <Box width="100%" p={4}>
                        <Box mb={4}>
                            {/* <Image src="/placeholder.svg?height=80&width=80" alt="Logo" width={80} height={80} style={{ marginBottom: '16px' }} /> */}
                            <Typography variant="h6" sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', color: 'var(--tertiary--color)', fontSize: '19px' }}>
                                <span style={{ fontWeight: 'bold', fontSize: '20px' }}>L</span>ogo
                            </Typography>
                            <Typography variant="h5" color="text.secondary">ESCUELA</Typography>
                            <Typography variant="h4" fontWeight="bold">Liderazgo y management</Typography>
                        </Box>
                        <Box position="relative" height="calc(100vh - 300px)">
                            <Image
                                src={selectedImage}
                                alt="Selected image"
                                layout="fill"
                                objectFit="cover"
                                style={{ borderRadius: '8px' }}
                            />
                        </Box>
                    </Box>
                )}
            </Box>
        </ThemeProvider>
    )
}

function SidebarItem({ icon, text, onClick }) {
    return (
        <ListItem
            button
            onClick={onClick}
            sx={{
                '&:hover': {
                    backgroundColor: 'grey.200',
                },
                borderRadius: 1,
                mb: 2,
            }}
        >
            <ListItemIcon sx={{ color: 'primary.main', minWidth: '48px' }}>
                {icon}
            </ListItemIcon>
            <ListItemText
                primary={text}
                primaryTypographyProps={{ variant: 'body1' }}
            />
        </ListItem>
    )
}