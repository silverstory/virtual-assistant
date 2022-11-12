import React, { useState } from 'react';
import {
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Drawer,
} from '@mui/material';
import { Box } from '@mui/system';

import ExperienceCards from '../organisms/ExperienceCards';
import ProjectCards from '../organisms/ProjectCards';
import SkillCards from '../organisms/SkillCards';
import BlogCards from '../organisms/BlogCards';

import ArchitectureRoundedIcon from '@mui/icons-material/ArchitectureRounded';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';

function MobileSectionsBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [section, setSection] = useState('');

  const toggleDrawer = (isOpen, section) => {
    setSection(section);
    setDrawerOpen(isOpen);
  };

  const DrawerLayout = () => {
    return (
      <div sx={{ padding: 20 }}>
        <Box
          sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
        >
          <IconButton
            onClick={() => toggleDrawer(false, '')}
            sx={{ margin: 2 }}
          >
            <ArrowBackIosNewRoundedIcon />
          </IconButton>
          <Typography variant="h6">{section}</Typography>
        </Box>
        <Box sx={{ marginX: 2 }}>
          <DrawerContent />
        </Box>
      </div>
    );
  };

  const DrawerContent = () => {
    switch (section) {
      // case 'Experience':
      case 'Services':
        return <ExperienceCards isDetailed={true} />;
      case 'Projects':
        return <ProjectCards isDetailed={true} />;
      case 'Skills':
        return <SkillCards isDetailed={true} />;
      case 'Blogs':
        return <BlogCards isDetailed={true} />;
      default:
        return <></>;
    }
  };

  return (
    <Box flex flexDirection="column">
      <List>
        <ListItem disablePadding>
          <ListItemButton
            // aria-label="services"
            aria-label="services"
            onClick={() => toggleDrawer(true, 'Activities')}
          >
            <ListItemIcon>
              <WorkOutlineIcon />
            </ListItemIcon>
            {/* <ListItemText primary="Experience" /> */}
            <ListItemText primary="Services" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            // aria-label="projects"
            aria-label="activities"
            onClick={() => toggleDrawer(true, 'Projects')}
          >
            <ListItemIcon>
              <ArchitectureRoundedIcon />
            </ListItemIcon>
            {/* <ListItemText primary="Projects" /> */}
            <ListItemText primary="Activities" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            // aria-label="skills"
            aria-label="events"
            onClick={() => toggleDrawer(true, 'Skills')}
          >
            <ListItemIcon>
              <CodeOutlinedIcon />
            </ListItemIcon>
            {/* <ListItemText primary="Skills" /> */}
            <ListItemText primary="Events" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            aria-label="blogs"
            onClick={() => toggleDrawer(true, 'Blogs')}
          >
            <ListItemIcon>
              <BookOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Blogs" />
          </ListItemButton>
        </ListItem>
      </List>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => toggleDrawer(false, '')}
      >
        <DrawerLayout />
      </Drawer>
    </Box>
  );
}

export default MobileSectionsBar;
