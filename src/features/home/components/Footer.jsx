import React from 'react';
import { Box, Container, Typography, Link } from '@mui/material';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        mt: 6,
        py: 3,
        px: 2,
        backgroundColor: '#1a1717ff',
        color: 'white',
        textAlign: 'center',
      }}
    >
      <Container maxWidth="md">
        <Typography variant="body1">
          © {currentYear} Public Library. All rights reserved.
        </Typography>

        <Typography variant="body2" sx={{ mt: 1 }}>
          Developed by{' '}
          <Link
            href="https://github.com/sahadathosen-topu"
            target="_blank"
            rel="noopener"
            underline="hover"
            color="inherit"
            sx={{ fontWeight: 'bold' }}
          >
            Sahadat Hosen Topu
          </Link>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
