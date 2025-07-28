import { Box, Button, Divider, Typography } from "@mui/material";
import { useAuthContext } from "../features/auth/hooks/useAuthContext";
import Grid from '@mui/material/Grid';
import { Link, Outlet, useLocation, useNavigate } from "react-router";

const Header=()=>{
    const {logout}=useAuthContext()
    const navigate=useNavigate()
    const handleLogout=()=>{
        logout()
        navigate('/')
    }
    return (
        <Box sx={{display:'flex',justifyContent:'flex-end',p:2}}>
            <Button onClick={handleLogout} variant="contained" size="small">Logout</Button>
        </Box>
    )
}

const SubHeader=()=>{
    return (
        <Box sx={{textAlign:'center'}}>
            <Typography sx={{fontWeight:'bold'}} variant="h4">Admin Pannel</Typography>
            <Typography variant="h5">Library Management System</Typography>
        </Box>
    )
}



const SectionOne = () => {
  const location = useLocation();

  const links = [
    { to: '/admin/dashboard', label: 'Users' },
    { to: '/admin/book_management', label: 'Book Management' },
    { to: '/admin/book_issues', label: 'Book Issues' },
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: { xs: 'row', sm: 'row', md: 'column' }, gap: '10px',flexWrap:'wrap'}}>
      {links.map(({ to, label }) => {
        const isActive = location.pathname === to;
        return (
          <Link key={to} to={to} style={{ textDecoration: 'none' }}>
            <Button
              sx={{width:'100%'}}
              variant={isActive ? 'contained' : 'outlined'}
              color={isActive ? 'primary' : 'inherit'}
              size="small"
            >
              {label}
            </Button>
          </Link>
        );
      })}
    </Box>
  );
};

const MainSection=()=>{
    return (
         <Box sx={{ flexGrow: 1 ,mt:5}}>
            <Grid container spacing={2}>
                <Grid size={{xs:12,sm:12,md:2}}>
                    <SectionOne></SectionOne>
                </Grid>
                <Grid size={{xs:12,sm:12,md:10}}>
                    <Box>
                        <Outlet></Outlet>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

const AdminLayout = () => {
    return (
        <>
            <Header></Header>
            <SubHeader></SubHeader>
            <Divider></Divider>
            <MainSection></MainSection>
        </>
    );
};

export default AdminLayout;