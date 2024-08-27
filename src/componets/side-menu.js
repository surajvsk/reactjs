import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {Collapse } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import HomeIcon from '@mui/icons-material/Home';
import PostAddIcon from '@mui/icons-material/PostAdd';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import PagesIcon from '@mui/icons-material/Pages';
import CommentIcon from '@mui/icons-material/Comment';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';
import { useNavigate } from 'react-router-dom';
const drawerWidth = 240;

function Sidebar(props) {
  const { window } = props;
  const navigate = useNavigate();
  const [open, setOpen] = React.useState({});
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
 
  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const handleClick = (index) => {
    setOpen((prevOpen) => ({
      ...prevOpen,
      [index]: !prevOpen[index],
    }));
  };

  const handleNavigation = (route) => {
    console.log('route:::::::', route);
    navigate(route);
  };


  const menuItems = [
    { text: 'Home', icon: <HomeIcon />, hasSubMenu: false, route: '/' },
    { text: 'Posts', icon: <PostAddIcon />, hasSubMenu: true, route: '/posts', subMenu: [
        { text: 'All Posts', route: '/posts/all' },
        { text: 'Add Post', route: '/posts/add' },
        { text: 'Categories', route: '/posts/categories' },
        { text: 'Tags', route: '/posts/tags' }
      ]},
    { text: 'Media', icon: <PhotoLibraryIcon />, hasSubMenu: true, route: '/media', subMenu: [
        { text: 'Library', route: '/media/library' },
        { text: 'Add New', route: '/media/add' }
      ]},
    { text: 'Pages', icon: <PagesIcon />, hasSubMenu: true, route: '/pages', subMenu: [
        { text: 'All Pages', route: '/pages/all' },
        { text: 'Add New', route: '/pages/add' }
      ]},
    { text: 'Comments', icon: <CommentIcon />, hasSubMenu: false, route: '/comments' },
    { text: 'Users', icon: <PeopleIcon />, hasSubMenu: true, route: '/users', subMenu: [
        { text: 'All Users', route: '/users/all' },
        { text: 'Add New', route: '/users/add' },
        { text: 'Profile', route: '/users/profile' }
      ]},
    { text: 'Settings', icon: <SettingsIcon />, hasSubMenu: true, route: '/settings', subMenu: [
        { text: 'Generate', route: '/settings/generate' },
        { text: 'Writing', route: '/settings/writing' },
        { text: 'Reading', route: '/settings/reading' },
        { text: 'Media', route: '/settings/media' },
        { text: 'Permalinks', route: '/settings/permalinks' },
        { text: 'Privacy', route: '/settings/privacy' }
      ]}
  ];

  const drawer = (
    <div >
      <Toolbar />
      <Divider />
      <List >
      {menuItems.map((item, index) => (
        <React.Fragment key={item.text}>
          <ListItem disablePadding>
            <ListItemButton
              className='ListButton'
              onClick={() => item.hasSubMenu ? handleClick(index) : handleNavigation(item.route)}
            >
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
              {item.hasSubMenu && (open[index] ? <ExpandLess /> : <ExpandMore />)}
            </ListItemButton>
          </ListItem>
          {item.hasSubMenu && (
            <Collapse in={open[index]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {item.subMenu.map((subMenuItem) => (
                  <ListItemButton key={subMenuItem.text} sx={{ pl: 4 }} onClick={() => handleNavigation(subMenuItem.route)}>
                    <ListItemText primary={subMenuItem.text} />
                  </ListItemButton>
                ))}
              </List>
            </Collapse>
          )}
        </React.Fragment>
      ))}
    </List>
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` }, backgroundColor: '#080808'
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 }  }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }, 
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent" 
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }, 
           
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main" 
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Typography paragraph   sx={{
        textAlign: 'justify',
        display: 'flex',
        justifyContent: 'center',
        margin: 'auto',
        maxWidth: '100%', // Adjust width as needed
      }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
          enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
          imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
          Convallis convallis tellus id interdum velit laoreet id donec ultrices.
          Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
          nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
          leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
          feugiat vivamus at augue. At augue eget arcu dictum varius duis at
          consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
          sapien faucibus et molestie ac.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
          enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
          imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
          Convallis convallis tellus id interdum velit laoreet id donec ultrices.
          Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
          nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
          leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
          feugiat vivamus at augue. At augue eget arcu dictum varius duis at
          consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
          sapien faucibus et molestie ac.
        </Typography>
      </Box>
    </Box>
  );
}

Sidebar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default Sidebar;
