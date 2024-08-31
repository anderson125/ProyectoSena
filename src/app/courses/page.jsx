'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Box, 
  Typography, 
  List, 
  ListItem, 
  ListItemText, 
  ListItemIcon, 
  Collapse, 
  IconButton,
  ThemeProvider,
  createTheme,
  styled,
  Grid,
  Paper,
  useMediaQuery,
  Button
} from '@mui/material';
import { 
  ExpandMore as ExpandMoreIcon,
  ExpandLess as ExpandLessIcon,
  PlayCircleOutline as PlayCircleOutlineIcon,
  Article as ArticleIcon,
  Close as CloseIcon,
  Description as DescriptionIcon,
  QuestionAnswer as QuestionAnswerIcon,
  Note as NoteIcon,
  Announcement as AnnouncementIcon,
  Star as StarIcon,
  Recycling as RecyclingIcon,
  Home as HomeIcon,
  AddCircleOutline as AddCircleOutlineIcon
} from '@mui/icons-material';

// Create a custom theme with green color scheme
const theme = createTheme({
  palette: {
    primary: {
      main: '#2e7d32', // Green color
    },
    background: {
      default: '#f1f8e9',
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
  },
});

// Styled components
const PageContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  backgroundColor: theme.palette.background.default,
}));

const VideoContainer = styled(Paper)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  paddingTop: '56.25%', // 16:9 Aspect Ratio
  backgroundColor: '#000',
  marginBottom: theme.spacing(2),
}));

const SidebarContainer = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  overflow: 'hidden',
  [theme.breakpoints.up('md')]: {
    position: 'fixed',
    top: theme.spacing(3),
    right: theme.spacing(3),
    width: 'calc(33.333% - 24px)', // Adjust based on your layout
    maxHeight: 'calc(100vh - 48px)',
    overflowY: 'auto',
  },
  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
}));

const SidebarHeader = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  padding: theme.spacing(2),
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'sticky',
  top: 0,
  zIndex: 1,
}));

const StyledListItem = styled(ListItem)(({ theme }) => ({
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
}));

const TabContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  borderBottom: `1px solid ${theme.palette.divider}`,
  marginBottom: theme.spacing(2),
}));

const Tab = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
}));

// Video component (placeholder)
const Video = () => (
  <Box
    component="video"
    controls
    sx={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
    }}
  >
    <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </Box>
);

// Main component
export default function CircularEconomyCoursePage() {
  const [openSections, setOpenSections] = useState({});
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleToggle = (index) => {
    setOpenSections(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const sections = [
    { title: 'Module 1: Introduction to Circular Economy', items: 11, duration: '47 min' },
    { title: 'Module 2: Sustainable Product Design', items: 19, duration: '1 h 28 min' },
    { title: 'Module 3: Waste Management and Recycling', items: 24, duration: '2 h 22 min' },
    { title: 'Module 4: Circular Business Models', items: 19, duration: '1 h 46 min' },
  ];

  return (
    <ThemeProvider theme={theme}>
      <PageContainer>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <VideoContainer elevation={3}>
              <Video />
            </VideoContainer>
            <Typography variant="h4" gutterBottom>
              Circular Economy: Transforming Waste into Resources, Sustainable Design, and Innovative Business Models
            </Typography>
            <Box display="flex" gap={2} mb={3}>
              <Button
                variant="contained"
                color="primary"
                startIcon={<AddCircleOutlineIcon />}
                component={Link}
                href="/canvas"
              >
                Add to Canvas Model
              </Button>
              <Button
                variant="outlined"
                color="primary"
                startIcon={<HomeIcon />}
                component={Link}
                href="/"
              >
                Go to Home
              </Button>
            </Box>
            <TabContainer>
              <Tab><DescriptionIcon /> Course Overview</Tab>
              <Tab><QuestionAnswerIcon /> Q&A</Tab>
              <Tab><NoteIcon /> Notes</Tab>
              <Tab><AnnouncementIcon /> Announcements</Tab>
              <Tab><StarIcon /> Ratings</Tab>
            </TabContainer>
            <Box display="flex" alignItems="center" mb={2}>
              <StarIcon color="primary" />
              <Typography variant="h6" component="span" mx={1}>
                4.9
              </Typography>
              <Typography variant="body2" color="text.secondary">
                17,733 ratings
              </Typography>
              <Typography variant="body2" color="text.secondary" ml={2}>
                36.5 hours total
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <SidebarContainer elevation={3}>
              <SidebarHeader>
                <Typography variant="h6">Course Content</Typography>
                {isMobile && (
                  <IconButton color="inherit" onClick={() => setOpenSections({})} size="small">
                    <CloseIcon />
                  </IconButton>
                )}
              </SidebarHeader>
              <List>
                {sections.map((section, index) => (
                  <React.Fragment key={index}>
                    <StyledListItem button onClick={() => handleToggle(index)}>
                      <ListItemIcon>
                        {openSections[index] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                      </ListItemIcon>
                      <ListItemText 
                        primary={<Typography variant="subtitle1">{section.title}</Typography>}
                        secondary={`${section.items} lessons | ${section.duration}`}
                      />
                    </StyledListItem>
                    <Collapse in={openSections[index]} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        <StyledListItem button sx={{ pl: 4 }}>
                          <ListItemIcon>
                            <PlayCircleOutlineIcon />
                          </ListItemIcon>
                          <ListItemText 
                            primary={<Typography variant="body1">1.1 Principles of Circular Economy</Typography>}
                            secondary="10 min"
                          />
                        </StyledListItem>
                        <StyledListItem button sx={{ pl: 4 }}>
                          <ListItemIcon>
                            <ArticleIcon />
                          </ListItemIcon>
                          <ListItemText 
                            primary={<Typography variant="body1">1.2 Linear vs. Circular Models</Typography>}
                            secondary="5 min"
                          />
                        </StyledListItem>
                        <StyledListItem button sx={{ pl: 4 }}>
                          <ListItemIcon>
                            <PlayCircleOutlineIcon />
                          </ListItemIcon>
                          <ListItemText 
                            primary={<Typography variant="body1">1.3 Benefits of Circular Economy</Typography>}
                            secondary="4 min"
                          />
                        </StyledListItem>
                        <StyledListItem button sx={{ pl: 4 }}>
                          <ListItemIcon>
                            <ArticleIcon />
                          </ListItemIcon>
                          <ListItemText 
                            primary={<Typography variant="body1">1.4 Case Studies in Circular Economy</Typography>}
                            secondary="1 min"
                          />
                        </StyledListItem>
                      </List>
                    </Collapse>
                  </React.Fragment>
                ))}
              </List>
            </SidebarContainer>
          </Grid>
        </Grid>
      </PageContainer>
    </ThemeProvider>
  );
}