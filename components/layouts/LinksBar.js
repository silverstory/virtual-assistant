import React, { useState, useRef } from 'react';
import {
  Avatar,
  IconButton,
  Typography,
  Box,
  ButtonBase,
  Button,
} from '@mui/material';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LanguageIcon from '@mui/icons-material/Language';
// import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
// import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { grey } from '@mui/material/colors';
import { Popover } from '@mui/material';
import Link from 'next/link';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import StyledBadge from '../atoms/StyledBadge';

function LinksBar() {
  const avatarRef = useRef(null);
  const [popoverOpen, setPopoverOpen] = useState(false);

  const handlePopoverClose = () => {
    setPopoverOpen(false);
  };

  return (
    <>
      <Box
        component={ButtonBase}
        onClick={() => setPopoverOpen(!popoverOpen)}
        ref={avatarRef}
      >
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          variant="dot"
        >
          <Avatar src="/avatar.jpg" sx={{ width: 50, height: 50 }} />
        </StyledBadge>
      </Box>

      <Popover
        open={popoverOpen}
        onClose={handlePopoverClose}
        anchorEl={avatarRef.current}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: {
            border: 1,
            borderColor: grey[200],
            padding: 2,
            marginLeft: 2,
            borderRadius: '5%',
          },
        }}
        elevation={0}
      >
        <Box flex flexDirection="column">
          <Typography variant="h6">Hotline 8888</Typography>
          <Box
            sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
          >
            <EmailIcon />
            <Typography
              variant="span"
              sx={{ marginLeft: '8px', marginTop: '5px' }}
            >
              message@8888.gov.ph
            </Typography>
          </Box>
          <Box
            sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
          >
            <PhoneIcon />
            <Typography
              variant="span"
              sx={{ marginLeft: '8px', marginTop: '5px' }}
            >
              +632-8888
            </Typography>
          </Box>
          <a
            href="https://op-proper.gov.ph/op-privacy-policy/"
            target="_blank"
            rel="noreferrer"
          >
            <Button>Privacy policy</Button>
          </a>
        </Box>
      </Popover>

      <a
        href="https://8888.gov.ph/"
        target="_blank"
        rel="noreferrer"
      >
        <IconButton>
          <LanguageIcon sx={{ color: grey[700], width: 30, height: 30 }} />
        </IconButton>
      </a>

      {/* <a
        href="https://www.linkedin.com/in/borge/"
        target="_blank"
        rel="noreferrer"
      >
        <IconButton>
          <LinkedInIcon sx={{ color: grey[700], width: 30, height: 30 }} />
        </IconButton>
      </a> */}

      <a
        href="https://facebook.com/#"
        target="_blank"
        rel="noreferrer"
      >
        <IconButton>
          <FacebookIcon sx={{ color: grey[700], width: 30, height: 30 }} />
        </IconButton>
      </a>

      {/* <a
        href="https://github.com/borge"
        target="_blank"
        rel="noreferrer"
      >
        <IconButton>
          <GitHubIcon sx={{ color: grey[700], width: 30, height: 30 }} />
        </IconButton>
      </a> */}
      <a
        href="https://www.twitter.com/#"
        target="_blank"
        rel="noreferrer"
      >
        <IconButton>
          <TwitterIcon sx={{ color: grey[700], width: 30, height: 30 }} />
        </IconButton>
      </a>
      {/* <a
        href="https://www.instagram.com/borge/"
        target="_blank"
        rel="noreferrer"
      >
        <IconButton>
          <InstagramIcon sx={{ color: grey[700], width: 30, height: 30 }} />
        </IconButton>
      </a> */}
    </>
  );
}

export default LinksBar;
