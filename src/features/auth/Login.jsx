import { Box, Typography } from '@mui/material';
import LoginFormField from './components/LoginFormField';
import { Link } from 'react-router';

export const Login=()=>{

    return(
        <Box sx={{textAlign:'center',mt:20}}>
            <LoginFormField></LoginFormField>
            <Box sx={{mt:4}}>
                <Typography>Not have an account? Please <Link to="/register">Register..</Link></Typography>
            </Box>
        </Box>
    )
}

Login.displayName='Login'