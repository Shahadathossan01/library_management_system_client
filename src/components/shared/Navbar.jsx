import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { toast } from 'react-toastify';
import { useAuthContext } from '../../features/auth/hooks/useAuthContext';
import { Link, NavLink, useNavigate } from 'react-router';
import logo from '../../../assects/logo.webp'

const pages = [
  { path: '/', element: 'Home' },
  { path: 'bookIssues', element: 'Book Issues' },
  { path: 'register', element: 'Register' }
];

export const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const { access_token, logout } = useAuthContext();

  const navigate=useNavigate()

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleLogout = () => {
    logout();
    handleCloseNavMenu();
    toast.success('Logout Successfully');
    navigate('/')
  };

  return (
    <AppBar sx={{bgcolor:'#a6e4e7'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "space-evenly", px: 3 }}> 

          {/* Desktop Logo */}
          <Box sx={{display: { xs: 'none', md: 'flex' }, alignItems: "center",pt:0.5}}>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              <img src={logo} alt="logo" style={{height:'60px',width:'60px',borderRadius:'50%'}} />
          </Link>
          </Box>

          {/* Desktop Navigation */}
          <Box  sx={{
      display: { xs: "none", md: "flex" },
      alignItems: "center",
      gap: 3,ml:'30%'
    }}>
            {pages.map((page) => (
              <NavLink to={page.path} key={page.element} style={{ textDecoration: 'none' }}>
                <Button sx={{ my: 2, color: 'black',fontWeight:'bold',fontSize:'16px',textTransform: 'none'}}>
                  {page.element}
                </Button>
              </NavLink>
            ))}

            {access_token ? (
              <Button onClick={handleLogout} x={{ my: 2, color: 'black',fontWeight:'bold',fontSize:'16px',textTransform: 'none' }}>
                Logout
              </Button>
            ) : (
              <NavLink to="/login" style={{ textDecoration: 'none' }}>
                <Button sx={{ my: 2, color: 'black',fontWeight:'bold',fontSize:'16px',textTransform: 'none' }}>
                  Login
                </Button>
              </NavLink>
            )}

            <Link to="/profile">
              <IconButton sx={{ p: 1 }}>
                <AccountCircleIcon sx={{ color: 'black', fontSize: '30px' }} />
              </IconButton>
            </Link>
          </Box>

          {/* Mobile Logo */}
          <Box sx={{mr:'60%',display: { xs: 'flex', md: 'none'},pt:1}}>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit'}}>
              <img src={logo} alt="logo" style={{height:'60px',width:'60px',borderRadius:'50%'}} />
          </Link>
          </Box>

          {/* Mobile Menu */}
          <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              keepMounted
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <NavLink
                  key={page.element}
                  to={page.path}
                  onClick={handleCloseNavMenu}
                  style={{ textDecoration: 'none', color: 'black' }}
                >
                  <MenuItem>
                    <Typography textAlign="center">{page.element}</Typography>
                  </MenuItem>
                </NavLink>
              ))}

              {access_token ? (
                <MenuItem onClick={handleLogout}>
                  <Typography textAlign="center">Logout</Typography>
                </MenuItem>
              ) : (
                <NavLink to="/login" onClick={handleCloseNavMenu} style={{ textDecoration: 'none', color: 'black' }}>
                  <MenuItem>
                    <Typography textAlign="center">Login</Typography>
                  </MenuItem>
                </NavLink>
              )}

              <Link to="/profile" onClick={handleCloseNavMenu} style={{ textDecoration: 'none' }}>
                <MenuItem>
                  <IconButton>
                    <AccountCircleIcon sx={{ color: 'black', fontSize: '30px' }} />
                  </IconButton>
                </MenuItem>
              </Link>
            </Menu>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
};

Navbar.displayName = 'Navbar';
