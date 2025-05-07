import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { NavLink } from 'react-router';
import { toast } from 'react-toastify';
import { useAuthContext } from '../../feaures/auth/hooks/useAuthContext';
import { AuthProvider } from '../../feaures/auth/AuthProvider';

const pages=[
    {
        path: '/',
        element: 'Home'
    },
    {
        path: 'bookIssue',
        element: 'Book Issue'
    },
    {
        path: 'register',
        element: 'Register'
    }
]

export const Navbar=()=>{
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const {state,logout}=useAuthContext()
  const {access_token}=state

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleLogout=()=>{
    logout()
    handleCloseNavMenu()
    toast.success('Logout Successfully')
  }


  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}

          {/**Desktop */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              flexGrow:3
            }}
          >
            Library Management System
          </Typography>

          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
            {/**Mobile */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Library Management System
          </Typography>

            {/**Mobile */}
          <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <NavLink style={{textDecoration:'none',color:'black'}} key={page.element} to={page.path} onClick={handleCloseNavMenu}>
                    <MenuItem>
                        <Typography sx={{ textAlign: 'center' }}>{page.element}</Typography>
                    </MenuItem>
                </NavLink>
              ))}

              <NavLink to='/login' style={{textDecoration:'none',color:'black'}} onClick={handleCloseNavMenu}>
                    <MenuItem>
                        <Typography sx={{ textAlign: 'center' }}>Login</Typography>
                    </MenuItem>
              </NavLink>
              <NavLink style={{textDecoration:'none',color:'black'}} onClick={handleLogout}>
                    <MenuItem>
                        <Typography sx={{ textAlign: 'center' }}>Logout</Typography>
                    </MenuItem>
              </NavLink>
            </Menu>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>

          {/**Desktop */}
          <Box sx={{ flexGrow:1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <NavLink to={page.path} style={{textDecoration:'none'}} key={page.element}>
                <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                >
                    {page.element}
                </Button>
              </NavLink>
            ))}

            {
              access_token? (
                  <NavLink onClick={handleLogout} style={{textDecoration:'none'}}>
                      <Button
                          sx={{ my: 2, color: 'white', display: 'block' }}
                      >
                          Logout
                      </Button>
                </NavLink>
              ) : (
                <NavLink to='/login' style={{textDecoration:'none'}}>
                    <Button
                        sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                        Login
                    </Button>
              </NavLink>
              )
            }

              
              

            <Box sx={{ flexGrow: 0 }}>
              <IconButton sx={{ p: 2 }}>
                {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /> */}
                <AccountCircleIcon sx={{color:'white',fontSize:'30px'}}></AccountCircleIcon>
              </IconButton>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

Navbar.displayName='Navbar'
