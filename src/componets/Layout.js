import React from 'react';
import { Box, Toolbar, Typography } from '@mui/material';
import Sidebar from './side-menu';  // Assuming Sidebar is in the same folder

const Layout = ({ children }) => {
  const drawerWidth = 240;

  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Typography
          paragraph
          sx={{
            textAlign: 'justify',
            display: 'flex',
            justifyContent: 'center',
            margin: 'auto',
            maxWidth: '100%', // Adjust width as needed
          }}
        >
          {children}
        </Typography>
      </Box>
    </Box>
  );
};

export default Layout;
