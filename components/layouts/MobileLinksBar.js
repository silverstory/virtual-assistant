import React from 'react';
import {
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { Box } from '@mui/system';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
// import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import StickyNote2OutlinedIcon from '@mui/icons-material/StickyNote2Outlined';

function MobileLinksBar() {
  return (
    <Box flex flexDirection="column">
      <Typography variant="h6">Hotline 8888</Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          marginY: '10px',
        }}
      >
        <EmailIcon />
        <Typography variant="span" sx={{ marginLeft: '8px' }}>
          message@8888.gov.ph
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          marginY: '10px',
        }}
      >
        <PhoneIcon />
        <Typography variant="span" sx={{ marginLeft: '8px' }}>
          +632-8888
        </Typography>
      </Box>
      <List>
        <ListItem disablePadding>
          <a
            href="https://op-proper.gov.ph/op-privacy-policy/"
            target="_blank"
            rel="noreferrer"
          >
            <ListItemButton>
              <ListItemIcon>
                <StickyNote2OutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Privacy policy" />
            </ListItemButton>
          </a>
        </ListItem>
        <ListItem disablePadding>
          <a
            href="https://8888.gov.ph/"
            target="_blank"
            rel="noreferrer"
          >
            <ListItemButton>
              <ListItemIcon>
                <LanguageIcon />
              </ListItemIcon>
              <ListItemText primary="8888.gov.ph" />
            </ListItemButton>
          </a>
        </ListItem>
        <ListItem disablePadding>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noreferrer"
          >
            <ListItemButton>
              <ListItemIcon>
                <FacebookIcon />
              </ListItemIcon>
              <ListItemText primary="Facebook" />
            </ListItemButton>
          </a>
        </ListItem>
        <ListItem disablePadding>
          <a
            href="https://twiter.com/"
            target="_blank"
            rel="noreferrer"
          >
            <ListItemButton>
              <ListItemIcon>
                <TwitterIcon />
              </ListItemIcon>
              <ListItemText primary="Twitter" />
            </ListItemButton>
          </a>
        </ListItem>
      </List>
    </Box>
  );
}

export default MobileLinksBar;
