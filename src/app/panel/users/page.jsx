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
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Button,
  Pagination,
  styled,
} from '@mui/material';
import {
  Add as AddIcon,
  Edit as EditIcon,
  Person as PersonIcon,
  Edit as EditUserIcon,
  Block as DisableIcon,
  ArrowBack as ArrowBackIcon,
} from '@mui/icons-material';

// Custom styled components
const StyledListItemText = styled(ListItemText)(() => ({
  '& .MuiListItemText-primary': {
    fontSize: '15px',
  },
}));

const StyledTypography = styled(Typography)(() => ({
  fontSize: '15px',
}));

// Fictitious user data
const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com', status: 'Active' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'Active' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', status: 'Inactive' },
  { id: 4, name: 'Alice Brown', email: 'alice@example.com', status: 'Active' },
  { id: 5, name: 'Charlie Davis', email: 'charlie@example.com', status: 'Active' },
  { id: 6, name: 'Eva White', email: 'eva@example.com', status: 'Inactive' },
  { id: 7, name: 'Frank Miller', email: 'frank@example.com', status: 'Active' },
  { id: 8, name: 'Grace Lee', email: 'grace@example.com', status: 'Active' },
];

const USERS_PER_PAGE = 5;

export default function UserPanel() {
  const router = useRouter();
  const [selectedView, setSelectedView] = useState('users');
  const [page, setPage] = useState(1);

  const handleNavigation = (view) => {
    setSelectedView(view);
    router.push(`/users/${view}`);
  };

  const handleEditUser = (userId) => {
    console.log(`Edit user with ID: ${userId}`);
    // Implement edit user logic here
  };

  const handleToggleUserStatus = (userId) => {
    console.log(`Toggle status for user with ID: ${userId}`);
    // Implement toggle user status logic here
  };

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  const handleReturnToPanel = () => {
    setSelectedView('');
    router.push('/panel');
  };

  const drawerWidth = 240;

  const paginatedUsers = users.slice((page - 1) * USERS_PER_PAGE, page * USERS_PER_PAGE);

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
            <Typography variant="h6">User Management</Typography>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => handleNavigation('create')}>
              <ListItemIcon>
                <AddIcon />
              </ListItemIcon>
              <StyledListItemText primary="Create User" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => handleNavigation('users')}>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <StyledListItemText primary="View Users" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={handleReturnToPanel}
          sx={{ mb: 2, fontSize: '15px' }}
        >
          Return to Panel
        </Button>
        {selectedView === 'create' && (
          <StyledTypography>Create User View</StyledTypography>
        )}
        {selectedView === 'users' && (
          <>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell align="right">Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {paginatedUsers.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell>
                        <StyledTypography>{user.name}</StyledTypography>
                      </TableCell>
                      <TableCell>
                        <StyledTypography>{user.email}</StyledTypography>
                      </TableCell>
                      <TableCell>
                        <StyledTypography>{user.status}</StyledTypography>
                      </TableCell>
                      <TableCell align="right">
                        <IconButton onClick={() => handleEditUser(user.id)} size="small">
                          <EditUserIcon />
                        </IconButton>
                        <IconButton onClick={() => handleToggleUserStatus(user.id)} size="small">
                          <DisableIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
              <Pagination
                count={Math.ceil(users.length / USERS_PER_PAGE)}
                page={page}
                onChange={handleChangePage}
                color="primary"
              />
            </Box>
          </>
        )}
        {!selectedView && (
          <StyledTypography>Select an option from the sidebar</StyledTypography>
        )}
      </Box>
    </Box>
  );
}