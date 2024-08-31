'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
    Box,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
    styled,
} from '@mui/material';
import { Add as AddIcon, Edit as EditIcon } from '@mui/icons-material';
import Header from '@/components/home/Header/Header';
import Footer from '@/components/home/Footer/Footer';

// Custom styled components
const StyledListItemText = styled(ListItemText)(() => ({
    '& .MuiListItemText-primary': {
        fontSize: '15px',
    },
}));

const StyledTypography = styled(Typography)(() => ({
    fontSize: '15px',
}));

export default function CoursePanel() {
    const router = useRouter();
    const [selectedView, setSelectedView] = useState('');

    const handleNavigation = (view) => {
        setSelectedView(view);
        router.push(`/panel/courses/${view}`);
    };

    const handleNavigationUser = (view) => {
        setSelectedView(view);
        router.push(`/panel/${view}`);
    };

    const drawerWidth = 240;

    return (
            <Box sx={{ display: 'flex' }}>
                <Drawer
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: drawerWidth,
                            boxSizing: 'border-box',
                        },
                    }}
                    variant="permanent"
                    anchor="left"
                >
                    <List>
                        <ListItem>
                            <Typography variant="h6">Course Management</Typography>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton onClick={() => handleNavigation('create')}>
                                <ListItemIcon>
                                    <AddIcon />
                                </ListItemIcon>
                                <StyledListItemText primary="Create Course" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton onClick={() => handleNavigation('edit')}>
                                <ListItemIcon>
                                    <EditIcon />
                                </ListItemIcon>
                                <StyledListItemText primary="Edit Courses" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton onClick={() => handleNavigationUser('users')}>
                                <ListItemIcon>
                                    <EditIcon />
                                </ListItemIcon>
                                <StyledListItemText primary="View Users" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Drawer>
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    {selectedView === 'create' && (
                        <StyledTypography>Create Course View</StyledTypography>
                    )}
                    {selectedView === 'edit' && (
                        <StyledTypography>Edit Courses View</StyledTypography>
                    )}
                    {selectedView === 'viewUser' && (
                        <StyledTypography>View Users View</StyledTypography>
                    )}
                    {!selectedView && (
                        <StyledTypography>Select an option from the sidebar</StyledTypography>
                    )}
                </Box>
            </Box>
    );
}